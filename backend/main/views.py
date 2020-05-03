from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
from django.http.request import HttpHeaders

# Create your views here.
def index(request: HttpRequest):
    return render(request, 'index.html', { })