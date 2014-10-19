from rest_framework import permissions


class IsAccountOwnerOrStaff(permissions.BasePermission):
    def has_permission(self, request, view):
        return view.action == 'retrieve' or request.user.is_staff

    def has_object_permission(self, request, view, obj):
        return obj == request.user or request.user.is_staff
