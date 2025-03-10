# from django.urls import path
# from  rest_framework.routers import SimpleRouter 
# from rest_framework_nested import routers
# from . import views

# router = routers.DefaultRouter()
# router.register('todos/' , views.TodoViewSet , basename='todos')


# urlpatterns = router.urls




from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('todos', views.TodoViewSet, basename='todos')

urlpatterns = router.urls

