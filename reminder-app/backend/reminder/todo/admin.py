from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Todo

@admin.register(Todo)
class TodoAdmin(admin.ModelAdmin):
    list_display = ('id', 'description', 'created_at' , 'status')
    list_per_page = 25
    search_fields = ('descrition',)


    @admin.display(ordering='completed')
    def status(self, todo):
        if (todo.completed):
            return 'Completed'
        return 'Incomplete'