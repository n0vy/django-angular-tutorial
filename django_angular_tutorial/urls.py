from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.views.generic import TemplateView

from authentication.views.account import AccountRetrieveUpdateView, \
    AccountThoughtsListView
from authentication.views.auth import LoginView, LogoutView
from authentication.views.user import UserCreateView, UserDestroyView
from thoughts.views import ThoughtListCreateView, \
    ThoughtRetrieveUpdateDestroyView

urlpatterns = patterns(
    '',

    url(r'^admin/', include(admin.site.urls)),

    url(r'^api/auth/',
        include('rest_framework.urls', namespace='rest_framework')),

    url(r'^api/v1/auth/login/$', LoginView.as_view(), name='login'),
    url(r'^api/v1/auth/logout/$', LogoutView.as_view(), name='logout'),

    url(r'^api/v1/accounts/(?P<user__username>[a-zA-Z0-9_@+-]+)/$',
        AccountRetrieveUpdateView.as_view(), name='account'),
    url(r'^api/v1/accounts/(?P<user__username>[a-zA-Z0-9_@+-]+)/thoughts/$',
        AccountThoughtsListView.as_view(), name='account-thoughts'),

    url(r'^api/v1/users/$', UserCreateView.as_view(), name='user-create'),
    url(r'^api/v1/users/(?P<pk>[0-9]+)/$',
        UserDestroyView.as_view(), name='user-destroy'),

    url(r'^api/v1/thoughts/$',
        ThoughtListCreateView.as_view(), name='thoughts'),
    url(r'^api/v1/thoughts/(?P<pk>[0-9]+)/$',
        ThoughtRetrieveUpdateDestroyView.as_view(), name='thought'),

    url(r'^', TemplateView.as_view(template_name='static/index.html')),
)
