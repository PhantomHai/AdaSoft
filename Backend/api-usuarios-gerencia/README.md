# Spring Boot - Proyecto Base Arquitectura - Microservicio 

Este componente corresponde a un proyecto base que permite crear una estructura basado en microservicios, este componente tiene como objetivo generar la base de implementación para que pueda ser ajustada respectivamente

Este proyecto pertenece a la especificación de liberación de documentación *"[CEN] - Documento Lineamientos Técnicos APIs de Servicios  - v1.0"*
 
## Pre Requisitos

* Contar con OpenJDK 11 instalado entorno local

## Ejecución del proyecto base sobre mvn archetype
Para iniciar se deberá crear el proyecto base mediante el arquetipo, para esto se deberá utilizar la siguiente instrucción

```
mvn archetype:generate -DarchetypeGroupId=cl.coordinador.arquetipos \
-DarchetypeArtifactId=archetype-rest-microservice-crud \
-DarchetypeVersion=1.0.0 \
-DgroupId=cl.coordinador.personas \
-DartifactId=api-personas-rrhh-personas

```

## Compilación y ejecución
La primera parte corresponderá a la compilación la cual deberá ser realizada mediante el comando:


```
mvn clean install -s configuration/settings.xml
```
Posteriormente, para ejecutar el servicio deberá realizarlo mediante el comando:

```
mvn spring-boot:run -s configuration/settings.xml
```


## Pruebas

Las pruebas podrán ser realizadas mediante postman, se adjunta proyecto para que pueda ser importado y testeado respectivamente, adicionalmente se establecen los comandos curl respectivamente


###### Crear Registro
```
curl --location -k --request POST 'http://localhost:8091/v1/departamento/gerencia/usuario/create' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username":"testName",
    "password":"testPass",
    "rut": 11111,
    "type": 1,
    "direccion": "Dirección de prueba xd"
}'
```

###### Buscar todos los registros
```
curl --location -k --request GET 'http://localhost:8080/v1/gerencia/departamento/funcionalidad/findAll'
```

###### Buscar registro por ID
```
curl --location -k --request GET 'http://localhost:8080/v1/gerencia/departamento/funcionalidad/findById/1'
```

###### Buscar registro por Rut o por atributo custom
```
curl --location -k --request GET 'http://localhost:8080/v1/gerencia/departamento/funcionalidad/findByRut/11111'
```

###### Eliminar registro por ID
```
curl --location -k --request DELETE 'http://localhost:8080/v1/gerencia/departamento/funcionalidad/delete/8'
```

### Creación pipeline

Ejecutar:

curl -v -X GET http://jenkins-cen.coordinador.cl:8080/crumbIssuer/api/json --user hcerda:hcerda

luego

curl -X GET http://jenkins-cen.coordinador.cl:8080/job/RedHat/job/test-deploy/config.xml -u hcerda:hcerda -o config.xml

luego, ejecutar:

curl -s -XPOST 'http://jenkins-cen.coordinador.cl:8080/job/RedHat/createItem?name=api-personas-rrhh-personas' --data-binary @config.xml -H "Content-Type:text/xml" --user hcerda:118d424eddde0f7e1cd089ca4c2c4265a6

luego, debemos configurar la integración con Gitlab para el webhook:

### Creación Integración Gitlab y Jenkins
https://docs.google.com/document/d/1RpjxSSqdhrJgr-Hv13SrbDBhnECtxDXi9bPfqYC47Ys/edit#heading=h.1n6zdhow586a
punto 4.8

### Primer Push a la rama
Para configurar exitosamente los recursos a crear dentro de Openshift,
primero debemos modificar los 3 archivos yaml presentes. rellenando al
final del archivo, con los parametros APP_NAME = Artifact ID que se le
dará al proyecto. APP_GROUP = Grupo de aplicaciones deseado. NAMESPACE= Namespace a desplegar. etc.

Luego de crear la pipeline con los comandos entregados anteriormente y modificar los archivos yaml
podemos proceder a subir nuestro archivo a Openshift, mediante un Push
a la rama, ya que tenemos la Integración de Gitlab con Jekins.






Comandos útiles docker

docker run --name postgres -p 127.0.0.1:5432:5432 -e POSTGRES_PASSWORD=postgrespw -e POSTGRES_USER=postgres -e POSTGRES_DB=gerencia -d postgres:latest

docker run -p 8080:8080 -p 50000:50000 --restart always jenkins/jenkins:lts-jdk11

docker run --name=api-usuarios-gerencia -p 8090:8090 api-usuarios-gerencia:latest

mvn clean install -s configuration/settings.xml

docker build --tag=api-usuarios-gerencia:latest .

docker run -d --name jaeger \
  -e COLLECTOR_ZIPKIN_HOST_PORT=:9411 \
  -p 5775:5775/udp \
  -p 6831:6831/udp \
  -p 6832:6832/udp \
  -p 5778:5778 \
  -p 16686:16686 \
  -p 14250:14250 \
  -p 14268:14268 \
  -p 14269:14269 \
  -p 9411:9411 \
  jaegertracing/all-in-one:1.9 \

docker network create adasoft-network

docker network connect adasoft-network postgres

docker network connect adasoft-network jaeger

docker-compose up -d

