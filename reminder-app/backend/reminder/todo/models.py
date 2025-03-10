from django.db import models

# Create your models here.
from django.db import models

class Todo(models.Model):
    description = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)
    created_at = models.DateField(auto_now_add=True)

