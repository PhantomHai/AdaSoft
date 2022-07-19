"""AdaSoft URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('',landing_page, name="landing-page"),
    path('login/', login, name="login"),
    path('dashboard/', dashboard, name="dashboard"),
    path('usuarios/', usuarios, name="usuarios"),
    path('pedidos/', pedidos, name="pedidos"),
    path('productos/', productos, name="productos"),
    path('sign-in/', sign_in, name="sign_in"),
    path('sign-up/', sign_up, name="sign_up"),
    path('user-profile/', user_profile, name="user_profile"),
    path('admin-profile/', admin_profile, name="admin_profile"),
    path('landing-page/', landing_page, name="landing-page"),
]
