from django.db import models

# Create your models here.
class Employee(models.Model):
    company_name = models.CharField(max_length=255, null=True)
    registration_date = models.DateField(null=True)
    registration_number = models.CharField(max_length=50, null=True)
    address = models.TextField(null=True)
    contact_person = models.CharField(null=True,max_length=100)
    departments = models.TextField(null=True)  
    number_of_employees = models.PositiveIntegerField(null=True)
    contact_phone = models.CharField(max_length=20, null=True)
    email = models.EmailField(null=True)

    employee_name = models.CharField(max_length=100, null=True)
    employee_id = models.CharField(primary_key=True, max_length=50, null=False )
    department = models.CharField(max_length=100, null=True)
    role = models.CharField(max_length=100, null=True)
    date_started = models.DateField(null=True)
    date_left = models.DateField(blank=True, null=True)
    duties = models.TextField(null=True)