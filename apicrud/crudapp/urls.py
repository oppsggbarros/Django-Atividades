from django.urls import path
from .views import PessoaCreate, PessoaListAll, PessoaUpdate, PessoaDelete

urlpatterns = [
    path('/', PessoaListAll.as_view()),
    path('/create', PessoaCreate.as_view()),
    path('/update/<int:pk>', PessoaUpdate.as_view()),
    path('/delete', PessoaDelete.as_view())
    
]
