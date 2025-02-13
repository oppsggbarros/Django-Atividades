from django import forms

class UsuarioForm(forms.Form):
    nome = forms.CharField(max_length=255)
    dataNascimento = forms.DateField()
    endereco = forms.CharField(max_length=255)