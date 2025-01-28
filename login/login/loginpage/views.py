from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'loginpage/index.html')

def cadastro(request):
    return render(request, 'loginpage/cadastro.html')
