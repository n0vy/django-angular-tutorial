from rest_framework import permissions


class IsAccountOwnerOrStaff(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        return obj == request.user.account or request.user.is_staff
