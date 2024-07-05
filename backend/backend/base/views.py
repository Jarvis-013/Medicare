from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from .products import products
from django.contrib.auth.models import User
from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST, require_GET
from .models import Patient, Doctor, Appointment, MedicalHistory, Payment  
from .serializers import PatientSerializer,MedicalHistorySerializer, DoctorSerializer, AppointmentSerializer, UserSerializer, UserSerializerWithToken
from django.shortcuts import get_object_or_404
import stripe
from django.contrib.auth.hashers import make_password
from rest_framework import status
# Create your views here.
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from google.oauth2 import id_token
from google.auth.transport import requests

@api_view(['POST'])
def google_signup(request):
    try:
        token = request.data.get('token')
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), '491189374301-mfjrti18qkmbs56efvsvlrjnja83ft07.apps.googleusercontent.com')
        name = idinfo['name']
        email = idinfo['email']
        # You can create a new user account or handle the signup logic here
        # For simplicity, I'm returning the user info
        return JsonResponse({'name': name, 'email': email})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)

@api_view(['POST'])
def google_login(request):
    try:
        token = request.data.get('token')
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), '491189374301-mfjrti18qkmbs56efvsvlrjnja83ft07.apps.googleusercontent.com')
        name = idinfo['name']
        email = idinfo['email']
        # You can authenticate the user or handle the login logic here
        # For simplicity, I'm returning the user info
        return JsonResponse({'name': name, 'email': email})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self,attrs):
        data=super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data
        for k,v in serializer.items():
            data[k]=v
        

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user=request.user
   
    serializer = UserSerializer(user,many=False) 
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users ,many=True) 
    return Response(serializer.data)
 

@api_view(['GET'])
def getPatients(request):
    Patients = Patient.objects.all()
    serializer = PatientSerializer(Patients,many=True) 
    return Response(serializer.data)
 

@api_view(['GET'])
def getPatient(request, pk):
    Patients =  Patient.objects.get(patient_id=pk)
    serializer = PatientSerializer(Patients) 
    return Response(serializer.data)


@api_view(['GET'])
def getDoc(request, id):
    Doc =  Doctor.objects.get(doctor_id=id)
    serializer = DoctorSerializer(Doc) 
    return Response(serializer.data)


@api_view(['GET'])
def getMedicalHistory(request,pk):
    Medical_History = MedicalHistory.objects.get(patient_id=pk)
    serializer = MedicalHistorySerializer(Medical_History) 
    return Response(serializer.data)


@api_view(['GET'])
def getDoctors(request):
    Doctors_ = Doctor.objects.all()
    serializer = DoctorSerializer(Doctors_ ,many=True) 
    return Response(serializer.data)
 
@api_view(['GET'])
def loginDoctors(request, em, pas):
    # Retrieve the doctor with the given email
    try:
        doctor = Doctor.objects.get(email=em)
    except Doctor.DoesNotExist:
        return Response("Doctor with the provided email does not exist", status=404)

    # Check if the provided password matches the doctor's password
    if doctor.password == pas:
        serializer = DoctorSerializer(doctor)
        return Response(serializer.data)
    else:
        return Response("Incorrect password", status=400)

@api_view(['GET'])
def getAppointment(request,pk):
    my_appointments = Appointment.objects.filter(patient_id=pk)
    serializer = AppointmentSerializer(my_appointments, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getAppointmentdoc(request,id):
    my_appointments = Appointment.objects.filter(doctor_id=id)
    serializer = AppointmentSerializer(my_appointments, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def doctor_appointments(request, doctor_name):
    my_appointments = Appointment.objects.filter(doc_name=doctor_name)
    serializer = AppointmentSerializer(my_appointments, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create_patient(request):
    serializer = PatientSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

 
@api_view(['POST'])
def create_Appointment(request):
    serializer = AppointmentSerializer(data=request.data,)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['POST'])
def create_doctor(request):
    serializer = DoctorSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['POST'])
def register_user(request):
    data = request.data

    # Check if the user already exists
    try:
        user = User.objects.get(email=data['email'])
        # If user already exists, update the user's information
        user.first_name = data['name']
        user.username = data['email']
        user.set_password(data['password'])
        user.save()
    except User.DoesNotExist:
        # If user does not exist, create a new user
        user = User.objects.create(
            first_name=data['name'],
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )

    # Create or update patient information
    patient_data = {
        'name': data['name'],
        'gender': data.get('gender', ''),
        'email': data['email'],
        'age': data.get('age', 0),
        'contact_no': data.get('contact_no', '')
    }

    # Check if patient exists based on email
    try:
        patient = Patient.objects.get(email=data['email'])
        # If patient exists, update the patient's information
        for key, value in patient_data.items():
            setattr(patient, key, value)
        patient.save()
    except Patient.DoesNotExist:
        # If patient does not exist, create a new patient
        patient = Patient.objects.create(**patient_data)

    # Serialize and return the user data with token
    serializer = UserSerializerWithToken(user, many=False)
    return Response(serializer.data)

    
stripe.api_key = settings.STRIPE_SECRET_KEY

@csrf_exempt
@require_POST
def process_payment(request):
    if request.method == 'POST':
        amount = request.POST.get('amount')
        token = request.POST.get('token')

        try:
            # Create a charge with the amount and token
            charge = stripe.Charge.create(
                amount=amount,
                currency='usd',
                source=token,
                description='Payment for appointment booking'
            )
            # If the charge is successful, return a success response
            return JsonResponse({'success': True})
        except stripe.error.StripeError as e:
            # Handle Stripe errors
            return JsonResponse({'success': False, 'error': str(e)})
        except Exception as e:
            # Handle other errors
            return JsonResponse({'success': False, 'error': 'An error occurred while processing the payment.'})
    else:
        # Return a method not allowed response if the request method is not POST
        return JsonResponse({'error': 'Method not allowed'}, status=405)

 
@api_view(['POST', 'PUT'])
def create_medical_history(request, pk):
    try:
        medical_history = MedicalHistory.objects.get(patient=pk)
        serializer = MedicalHistorySerializer(medical_history, data=request.data)
    except MedicalHistory.DoesNotExist:
        serializer = MedicalHistorySerializer(data=request.data)

    if serializer.is_valid():
        serializer.save(patient_id=pk)  # Save patient_id instead of patient
        status_code = status.HTTP_201_CREATED if request.method == 'POST' else status.HTTP_200_OK
        return Response(serializer.data, status=status_code)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

 
@api_view(['POST'])  # You can use GET or POST depending on your application's requirements
def logout_view(request):
    logout(request)
    return Response({"message": "Logged out successfully"}, status=status.HTTP_200_OK)