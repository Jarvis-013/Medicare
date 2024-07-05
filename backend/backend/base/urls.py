from django.contrib import admin
from . import views
from django.urls import path, include

urlpatterns = [
    path('patients/',views.getPatients,name="patients"),
    path('register_user/',views.register_user,name="register"),
    path('users/',views.getUsers,name="Users"),
    path('users/profile',views.getUserProfile,name="user-Profile"),
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('patients/<int:pk>/',views.getPatient,name="patients"),
    path('patients/<int:pk>/create_medical',views.create_medical_history,name="create_medical"),
    path('patients/<int:pk>/medicalHistory/',views.getMedicalHistory,name="MedicalHistory"),
    path('doctors/',views.getDoctors,name="Doctors"),
    path('patients/<int:pk>/appointments/',views.getAppointment,name="My_appointment"),
    path('patients/create/',views.create_patient,name="patients_create"),
    path('doctors/create/',views.create_doctor,name="patients_create"),
    path('appointments/create/',views.create_Appointment,name="appointments_create"),
    path('process_payment/', views.process_payment, name='process_payment'),
    path('logout/', views.logout_view, name='logout'),
    path('doc/<str:id>/', views.getDoc, name='lgetdoc'),
    path('login/<str:em>/<str:pas>/doctor', views.loginDoctors, name='loginDoctor'),
    path('api/doctor-appointments/<str:doctor_name>/', views.doctor_appointments, name='doctor_appointments'),
    path('api/google-signup/',views.google_signup),
    path('api/google-login/', views.google_login),
    ]