from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic import TemplateView

from rest_framework.routers import DefaultRouter

from authentication.views.account import AccountViewSet
from authentication.views.user import UserViewSet

router = DefaultRouter()
router.register(r'accounts', AccountViewSet)
router.register(r'users', UserViewSet)

urlpatterns = patterns(
    '',
    # Examples:
    # url(r'^$', 'django_angular_tutorial.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),


    url(r'^admin/', include(admin.site.urls)),

    url(r'^api/auth/',
        include('rest_framework.urls', namespace='rest_framework')),

    url(r'^api/v1/', include(router.urls)),

    url(r'^$', TemplateView.as_view(template_name='static/index.html')),
)
