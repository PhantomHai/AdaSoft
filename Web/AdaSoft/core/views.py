from django.shortcuts import render
import requests

AdminUsers="http://localhost:8091/v1/departamento/gerencia/usuario/findByType/0"
ClientUsers="http://localhost:8091/v1/departamento/gerencia/usuario/findByType/1"
DeliverUsers="http://localhost:8091/v1/departamento/gerencia/usuario/findByType/2"
ProductosHandrolls="http://localhost:8090/v1/departamento/gerencia/producto/findByCategoria/handrolls"
# Create your views here.
def home(request):
    return render(request, 'core/home.html')

def login(request):
    return render(request, 'core/login.html')

def dashboard(request):
    return render(request, 'core/dashboard.html')


def usuarios(request):
    responseAdmins = requests.get(AdminUsers).json()  #obtenemos la respuesta de la api
    contextAdmins = responseAdmins['content'] #obtenemos el contenido de la respuesta
    responseClients = requests.get(ClientUsers).json()  #obtenemos la respuesta de la api
    contextClients = responseClients['content'] #obtenemos el contenido de la respuesta
    responseDelivers = requests.get(DeliverUsers).json()  #obtenemos la respuesta de la api
    contextDelivers = responseDelivers['content'] #obtenemos el contenido de la respuesta

    return render(request, 'core/usuarios.html', {'contextAdmins': contextAdmins, 'contextClients': contextClients, 'contextDelivers': contextDelivers})

def pedidos(request):
    responseDesarrollo = requests.get("http://localhost:8092/v1/departamento/gerencia/pedidos/findByEstado/0").json()  #obtenemos la respuesta de la api
    contextDesarrollo = responseDesarrollo['content'] #obtenemos el contenido de la respuesta
    responseCamino = requests.get("http://localhost:8092/v1/departamento/gerencia/pedidos/findByEstado/1").json()  #obtenemos la respuesta de la api
    contextCamino = responseCamino['content'] #obtenemos el contenido de la respuesta
    responseEntregado = requests.get("http://localhost:8092/v1/departamento/gerencia/pedidos/findByEstado/2").json()  #obtenemos la respuesta de la api
    contextEntregado = responseEntregado['content'] #obtenemos el contenido de la respuesta
    responseCompletados = requests.get("http://localhost:8092/v1/departamento/gerencia/pedidos/findByEstado/3").json()  #obtenemos la respuesta de la api
    contextCompletados = responseCompletados['content'] #obtenemos el contenido de la respuesta
    return render(request, 'core/pedidos.html', {'contextCompletados': contextCompletados,'contextDesarrollo': contextDesarrollo, 'contextCamino': contextCamino, 'contextEntregado': contextEntregado})

ProductosGyozas="http://localhost:8090/v1/departamento/gerencia/producto/findByCategoria/gyoza"
def productos(request):
    responseHandrolls = requests.get(ProductosHandrolls).json()  #obtenemos la respuesta de la api
    contextHandrolls = responseHandrolls['content'] #obtenemos el contenido de la respuesta
    responseGyozas= requests.get(ProductosGyozas).json()  #obtenemos la respuesta de la api
    contextGyozas = responseGyozas['content'] #obtenemos el contenido de la respuesta
    return render(request, 'core/productos.html', {'contextHandrolls': contextHandrolls, 'contextGyozas': contextGyozas})   

def sign_in(request):
    return render(request, 'core/sign-in.html')

def sign_up(request):
    return render(request, 'core/sign-up.html')

def user_profile(request):
    return render(request, 'core/user-profile.html')

def admin_profile(request):
    return render(request, 'core/admin-profile.html')

def landing_page(request):
    responseprod = requests.get("http://localhost:8090/v1/departamento/gerencia/producto/findAll").json()  #obtenemos la respuesta de la api
    contextprod = responseprod['content'] #obtenemos el contenido de la respuesta
    return render(request, 'core/landing-page.html', {'contextprod': contextprod})