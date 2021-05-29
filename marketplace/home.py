from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from django.db import connections, connection
from django.core.exceptions import PermissionDenied
from django.views.generic import (View,TemplateView,
                                ListView,DetailView,
                                CreateView,DeleteView,
                                UpdateView)
# from bo import common


# Create your views here.

class Home(TemplateView):
    template_name='home/home.html'





     
