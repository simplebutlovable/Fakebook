from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, User
from django.core.files.storage import default_storage
from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver


from pathlib import Path
import os
import os.path
import random

def upload_location(instance, filename):
    file_path = 'profile-pics/{username}/-{filename}'.format(
        username=str(instance.username),
        filename=filename
    )
    return file_path

def random_generator():
    return str(random.randint(1, 999999))


class MyAccountManager(BaseUserManager):
    def create_user(self, email,username, first_name, last_name,birthdate, gender, password=None):
        username = first_name.replace(" ","-")+random_generator()
        while True:
            if Account.objects.filter(username=username).exists():
                username = first_name.replace(" ","-")+random_generator()
                print("Regenerated Slug")
            else:
                print("Unique Slug Detected")
                break
        if not email:
            raise ValueError("User must have an Email")
       
        if not username:
            raise ValueError("User must have a Username")
       

        user = self.model(
            email = self.normalize_email(email),
            username = username,
            first_name = first_name,
            last_name = last_name,
            birthdate = birthdate,
            gender = gender,
        )

    
        user.set_password(password)
        user.save(using = self._db)
        return user

    def create_superuser(self, username, email, first_name, last_name,birthdate, gender, password):

        username = first_name.replace(" ","-")+random_generator()
        while True:
            if Account.objects.filter(username=username).exists():
                username = first_name.replace(" ","-")+random_generator()
                print("Regenerated Slug")
            else:
                print("Unique Slug Detected")
                break

        user = self.create_user(
            email=self.normalize_email(email),
            username = username,
            first_name = first_name,
            last_name = last_name,
            birthdate = birthdate,
            gender = gender,
            password=  password,
        )
     
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user



class Account(AbstractBaseUser):
    email = models.EmailField(verbose_name = "Email", max_length=60, unique = True)
    username = models.CharField(verbose_name = "Username", max_length=30, unique= True)
    first_name = models.CharField(verbose_name = 'First Name',max_length=50)
    profile_pic = models.ImageField(verbose_name="Profiel Pic" )
    last_name = models.CharField(verbose_name = 'last name', max_length = 50)
    birthdate = models.CharField(verbose_name = 'birthday', max_length = 10)
    gender = models.CharField(verbose_name = 'gender', max_length = 6)
    date_joined = models.DateTimeField(verbose_name = 'date joined',auto_now_add = True)
    last_login = models.DateTimeField(verbose_name = 'last login',auto_now = True)
    is_admin = models.BooleanField(default = False)
    is_active = models.BooleanField(default = True)
    is_staff = models.BooleanField(default = False)
    is_superuser = models.BooleanField(default = False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'username', 'last_name', 'birthdate', 'gender']
    objects = MyAccountManager()

    def __str__(self):
        return self.username
    
    def has_perm(self, perm, obj = None):
        return self.is_admin
    
    def has_module_perms(self, app_label):
        return True


@receiver(post_delete, sender=Account)
def delete_associated_files(sender, instance, **kwargs):
    """Remove main directory after deleting the Image"""
    path = instance.profile_pic.name
    parent_path = os.path.relpath(os.path.join(path, os.pardir))

    if path:
        default_storage.delete(path)
        default_storage.delete(parent_path)
    
@receiver(pre_save, sender=Account)
def delete_file_on_update(sender, instance, **kwargs):
    if instance.pk:
        try:
            old_icon = Account.objects.get(pk=instance.pk).profile_pic
        except Account.DoesNotExist:
            return
        else:
            new_icon = instance.profile_pic
            if old_icon and old_icon.url != new_icon.url:
                old_icon.delete(save=False)