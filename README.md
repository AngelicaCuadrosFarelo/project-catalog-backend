# Catalogo para colchoneria (backend)

Backend del sistema de catálogo para una colchonería.
Provee una API REST para la gestión de productos, categorías, inventario y administración del catálogo comercial.

---

# Descripción del Proyecto

Este repositorio contiene el servicio backend encargado de:

- Administración de productos (colchones, bases, cabeceros y accesorios)

- Gestión de categorías

- Control de inventario

- Gestión de precios

- Exposición de endpoints REST para consumo por frontend o aplicaciones externas

El sistema está diseñado bajo principios de arquitectura limpia y separación por capas.

Controller → Service → Repository → Database

# Capas:

- Controllers: Manejan las solicitudes HTTP.

- Services: Contienen la lógica de negocio.

- Repositories: Acceso y manipulación de datos.

- Models/Entities: Definición de estructuras de datos.

# Futuras Mejoras

- Implementación de paginación y filtros avanzados

- Sistema de promociones y descuentos

- Carga masiva de productos

- Integración con pasarela de pagos
