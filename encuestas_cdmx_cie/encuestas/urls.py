from rest_framework import routers

from encuestas.views import EncuestaViewSet

router = routers.SimpleRouter()
router.register(r'encuestas', EncuestaViewSet, base_name='encuestas')
urlpatterns = router.urls
