# **Taxi24 - Documentación**

## **1. Instalación y Configuración Inicial**

### **Requisitos previos**

**Node.js y npm** (última versión estable recomendada)
**MongoDB** (en local o en un servidor remoto)
**Postman** (para realizar las pruebas de las rutas)

### **Instalación de dependencias**

Dentro de la carpeta raíz del proyecto (`taxi24`), ejecutar en consola:

```bash
npm install
```

Esto instalará todas las dependencias definidas en el `package.json`.

### **Archivo .env**

Crear un archivo **.env** en la raíz del proyecto con el siguiente contenido:

```env
MONGO_URI=mongodb://localhost:27017/autobus
PORT=3001
```

Puedes cambiar el nombre de la base de datos (`autobus`) o el puerto (`3001`) si lo necesitas.

### **Carga rápida de datos iniciales (Seeder)**

Para insertar datos de prueba de manera automática, ejecutar:

```bash
npm run seedAll
```

Este comando corre el script definido en `package.json`:

```
"seedAll": "ts-node src/scripts/seedAll.ts"
```
### **Para iniciar el proyecto**
```bash
npm run dev
```
## **2. Endpoints y Operaciones**

Todos los endpoints están expuestos en **[http://localhost:3001/api/](http://localhost:3001/api/)** (a menos que cambies el puerto en el `.env`).

### **2.1 Conductores**

#### **Crear Conductor**
**?: significa que es opcional puede o no tener este campo**
**Método:** `POST`
**Ruta:** `/conductor`
**Body (raw / JSON):**

```json
{
    nombre: string,
    cedula: string,
    telefono: string,
    correo?: string
}
```

#### **Actualizar Conductor**

**Método:** `PUT`
**Ruta:** `/conductor/:id`
**Body (raw / JSON):**

```json
{
    nombre: string,
    cedula: string,
    telefono: string,
    correo?: string
}
```

#### **Obtener todos los Conductores**

**Método:** `GET`
**Ruta:** `/conductor`

#### **Obtener Conductores Disponibles**

**Método:** `GET`
**Ruta:** `/conductor-disponibles`

#### **Obtener Conductor por ID**

**Método:** `GET`
**Ruta:** `/conductor/:id`


### **2.2 Pasajeros**

#### **Crear Pasajero**
**?: significa que es opcional puede o no tener este campo**
* **Método:** `POST`
* **Ruta:** `/pasajero`
* **Body (raw / JSON):**

```json
{
    nombre: string,
    cedula: string,
    telefono: string,
    correo?: string
}
```

#### **Actualizar Pasajero**
**?: significa que es opcional puede o no tener este campo**
* **Método:** `PUT`
* **Ruta:** `/pasajero/:id`
* **Body (raw / JSON):**

```json
{
     nombre: string,
    cedula: string,
    telefono: string,
    correo?: string
}
```

#### **Obtener todos los Pasajeros**

**Método:** `GET`
**Ruta:** `/pasajero`

#### **Obtener Pasajero por ID**

**Método:** `GET`
**Ruta:** `/pasajero/:id`


### **2.3 Viajes**

#### **Crear Viaje**

**Método:** `POST`
**Ruta:** `/viajes`
**Body (raw / JSON):**

```json
{
    "piloto": "string",
    "viaje_activo": true,
    "conductor_id": "string",
    "pasajero_id": "string",
}
```

#### **Actualizar Viaje**

**Método:** `PUT`
**Ruta:** `/viajes/:id`
**Body (raw / JSON):**

```json
{
    "piloto": "string",
    "viaje_activo": true,
    "conductor_id": "string",
    "pasajero_id": "string"
}
```

#### **Cambiar estado de Viaje (Toggle Completado)**

**Método:** `PUT`
**Ruta:** `/viajes/:id/status`
**Body (raw / JSON):**

```json
{
    "viaje_activo": false
}
```

> **Nota:** Cambiar `viaje_activo` a `false` indica que el viaje ha sido completado.

#### **Obtener todos los Viajes Activos**

**Método:** `GET`
**Ruta:** `/viajes`

---

## **3. Notas Adicionales**

✅ **Pruebas en Postman:**

* Selecciona siempre `Body > raw > JSON` para las peticiones `POST` y `PUT`.
* Verifica que la base de datos MongoDB esté corriendo antes de realizar cualquier prueba.

✅ **Estructura de datos esperada:**
Asegúrate de enviar siempre los campos requeridos en el formato correcto (por ejemplo, `boolean` sin comillas).

✅ **Modificación del puerto o la base de datos:**
Si modificas valores en el `.env`, reinicia el servidor para aplicar los cambios.

---

