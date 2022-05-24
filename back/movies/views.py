from django.shortcuts import render
import idna
from rest_framework.response import Response
from .models import Movie
from rest_framework.decorators import api_view
from .serializers import MovieSerializer,MovielistSerializer
# Create your views here.

@api_view(['GET'])
def index(request):
    movie = Movie.objects.all()
    serializer = MovielistSerializer(movie, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def detail(request, id):
    movie = Movie.objects.get(id=id)
    serializer = MovieSerializer(movie)
    return Response(serializer.data)   