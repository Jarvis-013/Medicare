from django.db.models.signals import pre_save, post_save
from django.contrib.auth.models import User
from django.dispatch import receiver
from .models import Patient

def updateUser(sender, instance, **kwargs):
    user = instance
    if user.email != '':
        user.username = user.email

pre_save.connect(updateUser, sender=User)

@receiver(post_save, sender=User)
def create_patient(sender, instance, created, **kwargs):
    if created:
        Patient.objects.create(user=instance, name=instance.username, email=instance.email)
