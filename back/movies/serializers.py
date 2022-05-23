
from rest_framework import serializers
from django.contrib.auth import get_user_model

from movies.models import Article, Movie, Comment

User = get_user_model()

class ArticleSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Article
        fields = ('pk', 'user', 'title', 'content', ' created_at', 'updated_at')

class MovieSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Movie
        fields = '__all__'

class MovielistSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Movie
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Comment
        fields = '__all__'

