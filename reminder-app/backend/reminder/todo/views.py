from django.shortcuts import render
from rest_framework import viewsets
from .models import Todo
from .serializers import TodoSerializer, UpdateTodoSerializer


class TodoViewSet(viewsets.ModelViewSet):
    http_method_names = ['get', 'post', 'patch', 'delete']
    queryset = Todo.objects.all()

    def get_serializer_class(self):
        if self.request.method  == 'GET':
            return TodoSerializer
        elif self.request.method == 'PATCH':
            return UpdateTodoSerializer
        return TodoSerializer
    