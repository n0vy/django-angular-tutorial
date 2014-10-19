from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic import TemplateView

from rest_framework.routers import DefaultRouter

from authentication.views.account import AccountRetrieveUpdateView
from authentication.views.user import UserCreateView, UserDestroyView
from thoughts.views import ThoughtListCreateView, \
    ThoughtRetrieveUpdateDestroyView

urlpatterns = patterns(
    '',

    url(r'^admin/', include(admin.site.urls)),

    url(r'^api/auth/',
        include('rest_framework.urls', namespace='rest_framework')),

    url(r'^api/v1/accounts/(?P<pk>[0-9]+)/$',
        AccountRetrieveUpdateView.as_view(), name='account'),

    url(r'^api/v1/users/$', UserCreateView.as_view(), name='accounts'),
    url(r'^api/v1/users/(?P<pk>[0-9]+)/$',
        UserDestroyView.as_view(), name='account'),

    url(r'^api/v1/thoughts/$', ThoughtListCreateView.as_view(), name='thoughts'),
    url(r'^api/v1/thoughts/(?P<pk>[0-9]+)/$',
        ThoughtRetrieveUpdateDestroyView.as_view(), name='thought'),

    url(r'^', TemplateView.as_view(template_name='static/index.html')),
)
