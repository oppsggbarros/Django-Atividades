from django.shortcuts import render
from django.shortcuts import render, redirect
from django.contrib import messages  # Para exibir mensagens de sucesso ou erro
import firebase_admin
from firebase_admin import credentials, firestore
from django.http import HttpResponse
 
 
if not firebase_admin._apps:
    cred = credentials.Certificate("config/chave.json")
    firebase_admin.initialize_app(cred)
 
db = firestore.client()
 
def index(request):
    return render(request, 'loginpage/index.html')
 
def cadastro(request):
    if request.method == "POST":
        nome = request.POST.get('nome')
        data_nascimento = request.POST.get('dataNascimento')
        endereco = request.POST.get('endereco')
 
        if nome and data_nascimento and endereco:
            try:
            
                usuario = {
                    "nome": nome,
                    "data_nascimento": data_nascimento,
                    "endereco": endereco
                }
 
                
                db.collection("usuarios").add(usuario)
 
                messages.success(request, "Usuário cadastrado com sucesso!")
                return redirect('cadastro') 
 
            except Exception as e:
                return HttpResponse(f"Erro ao salvar no Firebase: {str(e)}")
 
    return render(request, 'loginpage/cadastro.html')
 
 
def listar_usuarios(request):
    try:
        
        usuarios_ref = db.collection('usuarios')
        docs = usuarios_ref.stream()
 
        
        usuarios = [{"id": doc.id, **doc.to_dict()} for doc in docs]
 
    except Exception as e:
        print(f"Erro ao buscar usuários: {e}")
        usuarios = []
 
    return render(request, 'loginpage/lista_usuarios.html', {'usuarios': usuarios})

# Create your views here.
def index(request):
    return render(request, 'loginpage/index.html')

def cadastro(request):
    return render(request, 'loginpage/cadastro.html')
