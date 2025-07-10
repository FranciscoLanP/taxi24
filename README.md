# taxi24

Documentacion:
**Cuando se descargue el proyecto haga un "npm install" en consola en la posicion dentro de taxi24 para instalar todas las dependencias del package.json**.

**Para hacer una creacion rapida realice la ejecucion del script introduciendo en consola "npm run seedAll" donde la ruta en el json es "seedAll": "ts-node src/scripts/seedAll.ts"**. 

**programas necesarios para la prueba: base de datos "Mongodb", "Postman"**.

**.env**
Crea este archivo y agregale lo siguiente:
MONGO_URI = "mongodb://localhost:27017/autobus"
PORT=3001

**Creacion  y Actualizacion de documentos via Postman**
AllCreated: En postman pondremos el metodo "POST" por "body" y "raw"
AllUpdated: En postman ponderemos el metodo "PUT" por "body" y "raw"
ViajesToggle" En postman pondremos el metodo "PUT" por "body" y "raw"
**Conductores* 
            ruta created:
                http://localhost:3001/api/conductor
            ruta updated:
                http://localhost:3001/api/conductor/:id

body Ejemplo:
            {
                "nombre": "string"
            }
----------------------------------------------------------------------
**Personas*
        ruta created:
             http://localhost:3001/api/pasajero
        ruta updated:
             http://localhost:3001/api/pasajero/:id

body Ejemplo:
            {
                "pasajero": "string"
            }
-----------------------------------------------------------------------
**Viajes*
        ruta created:
            http://localhost:3001/api/viajes
        ruta updated:
            http://localhost:3001/api/viajes/:id
        ruta toggel viaje completado:
            http://localhost:3001/api/viajes/:id/status

body Ejemplo update:
            {
                "piloto": "string",
                "viaje_activo": boolean,
                "conductor_id": "string"
            }
body Ejemplo toggle            
            {
                "viaje_activo": boolean
            }


**Obtencion de los datos**

**Conductores**

**Obtener una lista de  todos los conductores. 
metodo "GET"
ruta: 
     http://localhost:3001/api/conductor

**obtener una lista de todos los conductores "DISPONIBLES".
metodo "GET"
ruta:
     http://localhost:3001/api/conductor-disponibles

**obtener conductor especifico por "ID".
metodo "GET"
ruta: 
     http://localhost:3001/api/conductor/:id
-----------------------------------------------------------------------
**Viajes**

**Crear una nueva solicitud de "Viaje" asignando un conductor a un piloto.
metodo "POST"
ruta:
    http://localhost:3001/api/viajes

**Completar un viaje. "cambiar a false para completar el viaje" 
metodo "PUT"
ruta:
    http://localhost:3001/api/viajes/:id/status

**Obtener todos los viajes Activos.
metodo "GET"
ruta:
    http://localhost:3001/api/viajes
-----------------------------------------------------------------------
**Pasajeros**

**Obtener una lista de todos los pasajeros. 
metodo "GET"
ruta:
    http://localhost:3001/api/pasajero

**Obtener un pasajero en especifico por su "ID" 
metodo "PUT"
ruta:
    http://localhost:3001/api/pasajero/:id
