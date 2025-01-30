from django.shortcuts import render

def index(request):
    return render(request, 'sistema/index.html')

def aluno(request):
    return render(request, 'sistema/aluno.html')

def avaliacao(request):
    return render(request, 'sistema/avaliacao.html')

def relatorio(request):
    return render(request, 'sistema/relatorio.html')