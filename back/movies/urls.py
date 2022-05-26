from django.urls import path
from . import views

app_name = 'movies'

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:id>/', views.detail, name='detail'),
    path('<int:id>/comments/', views.movie_comment_create),
    path('<int:id>/comments/<int:comment_pk>/', views.movie_comment_detail ),
    path('articles/', views.article_list),
    path('articles/<int:article_pk>/', views.article_detail),
    path('articles/<int:article_pk>/comments/', views.comment_create),
    path('articles/<int:article_pk>/comments/<int:comment_pk>/', 
    views.comment_detail),
]
