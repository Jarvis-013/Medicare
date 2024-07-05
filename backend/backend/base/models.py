from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Patient(models.Model):
    GENDER_CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other')
    )

    user = models.ForeignKey(User, on_delete=models.CASCADE,null=True)
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    email = models.EmailField()
    age = models.IntegerField(default=0)
    contact_no = models.CharField(max_length=15)
    patient_id = models.AutoField(primary_key=True, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)

    # Other important fields if exist
    # Add additional fields as needed

    def __str__(self):
        return self.name



class Doctor(models.Model):
    GENDER_CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other')
    )

    DEFAULT_PHOTO_URL = './static/images/fun-3d-cartoon-illustration-indian-doctor.jpg'

    name = models.CharField(max_length=100)
    email = models.EmailField()
    image = models.ImageField(null=True, blank=True,  default=DEFAULT_PHOTO_URL)
    age = models.PositiveIntegerField()
    password = models.CharField(max_length=128, null=True)
    rating = models.DecimalField(max_digits=5, decimal_places=2,default=0)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    specialization = models.CharField(max_length=100)
    qualifications = models.TextField()
    experience = models.PositiveIntegerField(default=0)
    doctor_id = models.CharField(max_length=20, primary_key=True)
    created_at = models.DateTimeField(auto_now_add=True)

    # Add additional fields as needed

    def __str__(self):
        return f"Dr. {self.name}"



class Appointment(models.Model):
    PAYMENT_MODE_CHOICES = (
        ('Cash', 'Cash'),
        ('Credit Card', 'Credit Card'),
        ('Debit Card', 'Debit Card'),
        ('Online Payment', 'Online Payment'),
        ('Insurance', 'Insurance'),
        ('Other', 'Other')
    )

    patient_id = models.ForeignKey(Patient, on_delete=models.CASCADE)  # ForeignKey to Patient model
    doc_name = models.CharField(max_length=100)
    date = models.DateField()
    time = models.TimeField()
    payment_mode = models.CharField(max_length=20, choices=PAYMENT_MODE_CHOICES)
    problem = models.TextField()
    appointment_id = models.AutoField(primary_key=True)

    def __str__(self):
        return f"Appointment {self.appointment_id} - Patient: {self.patient_id.name} with Dr. {self.doc_name}"


class MedicalHistory(models.Model):
    GENDER_CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other')
    )

    patient = models.OneToOneField(Patient, on_delete=models.CASCADE, primary_key=True, related_name='medical_history')
    medical_history = models.TextField()
    any_disease = models.CharField(max_length=100)

    # Add additional fields as needed

    def __str__(self):
        return self.patient.name



class Payment(models.Model):
    PAYMENT_MODE_CHOICES = (
        ('Cash', 'Cash'),
        ('Credit Card', 'Credit Card'),
        ('Debit Card', 'Debit Card'),
        ('Online Payment', 'Online Payment'),
        ('Insurance', 'Insurance'),
        ('Other', 'Other')
    )

    doc_name = models.CharField(max_length=100)
    patient_name = models.CharField(max_length=100)
    patient_id = models.CharField(max_length=20)
    problem = models.TextField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    time = models.TimeField()
    payment_mode = models.CharField(max_length=20, choices=PAYMENT_MODE_CHOICES)

    # Add additional fields as needed

    def __str__(self):
        return f"Payment for {self.patient_name} with Dr. {self.doc_name}"