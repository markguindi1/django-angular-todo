# Urls for todoapp
from todoapp import views
from django.urls import path
from django.urls import path, include

app_name = "todoapp"

urlpatterns = [
    path('todos/', views.TodoList.as_view()),
    path('todos/<int:pk>/', views.TodoDetail.as_view()),
]