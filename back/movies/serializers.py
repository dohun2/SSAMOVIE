
from rest_framework import serializers
from django.contrib.auth import get_user_model

from movies.models import Article, Movie, Comment, MovieComment

User = get_user_model()

class CommentSerializer(serializers.ModelSerializer):
    
    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username')

    user = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ('pk', 'user', 'content', 'article',)
        read_only_fields = ('article', )

class MovieCommentSerializer(serializers.ModelSerializer):
    
    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username')

    user = UserSerializer(read_only=True)

    class Meta:
        model = MovieComment
        fields = ('pk', 'user', 'content', 'movie',)
        read_only_fields = ('movie', )

class ArticleSerializer(serializers.ModelSerializer):

    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username')

    comments = CommentSerializer(many=True, read_only=True)
    user = UserSerializer(read_only=True)
    
    class Meta:
        model = Article
        fields = ('pk','user','title','content','comments')


class MovieSerializer(serializers.ModelSerializer):

    class UserSerializer(serializers.ModelSerializer):
        class Meta:
            model = User
            fields = ('pk', 'username')

    user = UserSerializer(read_only=True)
    movie_comments = MovieCommentSerializer(many=True, read_only=True)

    class Meta:
        model = Movie
        fields = '__all__'

class MovielistSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Movie
        fields = ('title','poster_path','id')



class ArticleListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = ('id', 'title','content')