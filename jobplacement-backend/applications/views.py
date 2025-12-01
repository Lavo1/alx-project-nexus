from rest_framework import generics, permissions
from .models import Application
from .serializers import ApplicationSerializer

class ApplyView(generics.CreateAPIView):
    serializer_class = ApplicationSerializer
    permission_classes = [permissions.IsAuthenticated]
