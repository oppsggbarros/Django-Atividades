from django.shortcuts import render
from rest_framework import generics
from .models import Pessoa
from .serializer import PessoaSerializer

class PessoaListAll(generics.ListAPIView):
    queryset = Pessoa.objects.all()
    serializer_class = PessoaSerializer
    
class PessoaCreate(generics.CreateAPIView):
    queryset = Pessoa.objects.all()
    serializer_class = PessoaSerializer
    
class PessoaUpdate(generics.UpdateAPIView):
    queryset = Pessoa.objects.all()
    serializer_class = PessoaSerializer

class PessoaDelete(generics.DestroyAPIView):
    queryset = Pessoa.objects.all()
    serializer_class = PessoaSerializer

