from django.shortcuts import render, get_object_or_404
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import User, UserSerializer
# Create your views here.

User = get_user_model()

@api_view(['GET'])
def profile(request, username):
    pro = get_object_or_404(User, username=username)
    serializer = UserSerializer(pro)
    return Response(serializer.data)


