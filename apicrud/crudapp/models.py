from django.db import models

class Pessoa(models.Model):
    nome = models.CharField(max_length=100)
    age = models.IntegerField()
    email = models.EmailField(max_length=100)
    
    def __str__(self):
        return self.name
