from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('cadastro_receita/', views.cadastro_receita, name='cadastro_receita'),
    path('casdatro_despesa/', views.casdatro_despesa, name='casdatro_despesa'),
    path('metas/', views.metas, name='metas'),
    path('relatorio/', views.relatorio, name='relatorio')
    
]