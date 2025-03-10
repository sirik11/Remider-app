from rest_framework import serializers
from .models import Todo;

class TodoSerializer(serializers.ModelSerializer):
    completed = serializers.BooleanField(read_only=True)
    class Meta:
        model = Todo
        fields = ('id', 'description' , 'created_at','completed')

class UpdateTodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('completed',)

