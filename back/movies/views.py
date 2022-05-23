from django.shortcuts import render
from requests import Response
from . models import Movie


# Create your views here.
def movie(request):
    movies = Movie.objects.all()
    return Response(movies)