from django.urls import path
from . import views

urlpatterns = [
    path('music/', views.MusicList.as_view(), name='music-list'),
]
