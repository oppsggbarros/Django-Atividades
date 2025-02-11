from django.shortcuts import render

def index(request):
    return render(request, 'main/index.html')
def cadastro_receita(request):
    return render(request, 'main/cadastro_receita.html')
def casdatro_despesa(request):
    return render(request, 'main/casdatro_despesa.html')
def metas(request):
    return render(request, 'main/metas.html')
def relatorio(request):
    return render(request, 'main/relatorio.html')