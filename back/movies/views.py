
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import get_list_or_404, get_object_or_404
from .serializers import MovieSerializer,MovielistSerializer,ArticleSerializer,ArticleListSerializer, CommentSerializer,MovieCommentSerializer
from .models import Movie, Article, Comment, MovieComment
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


@api_view(['POST'])
def movie_comment_create(request, id):
    user = request.user
    movie = get_object_or_404(Movie, pk=id)
    
    serializer = MovieCommentSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(movie=movie, user=user)
        comments = movie.movie_comments.all()
        serializer = MovieCommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)



@api_view(['GET', 'POST'])
def article_list(request):
    if request.method == 'GET':
        articles = get_list_or_404(Article)
        serializer = ArticleListSerializer(articles, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'DELETE', 'PUT'])
def article_detail(request, article_pk):
    article = get_object_or_404(Article, pk=article_pk)

    if request.method == 'GET':
        serializer = ArticleSerializer(article)
        return Response(serializer.data)

    elif request.method == 'DELETE':
        article.delete()
        data = {
            'delete': f'데이터 {article_pk}번이 삭제되었습니다.',
        }
        return Response(data, status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'PUT':
        serializer = ArticleSerializer(article, request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

@api_view(['POST'])
def comment_create(request, article_pk):
    user = request.user
    article = get_object_or_404(Article, pk=article_pk)
    
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(article=article, user=user)
        comments = article.comments.all()
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['DELETE', 'PUT'])
def comment_detail(request, article_pk, comment_pk):
    article = get_object_or_404(Article, pk=article_pk)
    comment = get_object_or_404(Comment, pk=comment_pk)

    if request.method == 'DELETE':
        if request.user == comment.user:
            comment.delete()
            comments = article.comments.all()
            serializer = CommentSerializer(comments, many=True)
            return Response(serializer.data)

    elif request.method == 'PUT':
        if request.user == comment.user:
            serializer = CommentSerializer(instance=comment, data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                comments = article.comments.all()
                serializer = CommentSerializer(comments, many=True)
                return Response(serializer.data)


@api_view(['DELETE', 'PUT'])
def movie_comment_detail(request, id, comment_pk):
    movie = get_object_or_404(Movie, pk=id)
    moviecomment = get_object_or_404(MovieComment, pk=comment_pk)

    if request.method == 'DELETE':
        if request.user == moviecomment.user:
            moviecomment.delete()
            comments = movie.movie_comments.all()
            serializer = MovieCommentSerializer(comments, many=True)
            return Response(serializer.data)

    elif request.method == 'PUT':
        if request.user == moviecomment.user:
            serializer = MovieCommentSerializer(instance=moviecomment, data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                comments = movie.movie_comments.all()
                serializer = MovieCommentSerializer(comments, many=True)
                return Response(serializer.data)