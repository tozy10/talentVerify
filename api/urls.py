from django.urls import path
from .views import login_view, EmployeeListCreate, employeeRetrieveUpdateDestroy
urlpatterns = [
    path('employees/',EmployeeListCreate.as_view(), name="employee-view-create" ),
    path('api/login/', login_view),
     path('employees/<int:pk>',employeeRetrieveUpdateDestroy.as_view(), name="employee-view-create" ),
]
