from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from encuestas.models import Encuesta
from encuestas.serializers import EncuestaSerializer

class EncuestaViewSet(viewsets.ModelViewSet):
    queryset = Encuesta.objects.all()
    serializer_class = EncuestaSerializer
    #permission_classes = [IsAuthenticated]

    # def get_queryset(self):
    #     """Return the authenticated user's encuestas."""
    #     return super().get_queryset().filter(user=self.request.user)
