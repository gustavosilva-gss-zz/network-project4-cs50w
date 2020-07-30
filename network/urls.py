from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("u/<str:username>", views.user_page, name="user"),
    path("following", views.following, name="following"),
    
    #API - these are always actions
    path("new", views.new, name="new"),
    path("follow/<str:username>", views.follow, name="follow"),
    path("edit", views.edit, name="edit"),
    path("like", views.like, name="like"),
]
