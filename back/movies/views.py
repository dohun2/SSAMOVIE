from django.shortcuts import render
from requests import Response
from .models import Movie
from rest_framework.decorators import api_view
from .serializers import MovieSerializer
# Create your views here.

@api_view(['GET'])
def movie(request):
    movie = Movie.objects.all()
    serializer = MovieSerializer(movie, many=True)
    return Response(serializer.data)