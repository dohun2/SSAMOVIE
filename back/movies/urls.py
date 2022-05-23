
from django.contrib import admin
from django.urls import path, include
from . import views

app_name = 'movies'

urlpatterns = [
    path('movie/', views.movie)
]
