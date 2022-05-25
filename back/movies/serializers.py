
from rest_framework import serializers
from django.contrib.auth import get_user_model

from movies.models import Article, Movie, Comment

User = get_user_model()

class ArticleSerializer(serializers.ModelSerializer):

    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username')

    user = UserSerializer(read_only=True)
    
    class Meta:
        model = Article
        fields = ('pk','user','title','content')


class MovieSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Movie
        fields = '__all__'

class MovielistSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Movie
        fields = ('title','poster_path','id')

class CommentSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ('article',)

class ArticleListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = ('id', 'title','content')