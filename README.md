# 🤖 Proyecto_ChatBoot_Unsis
**Materia: Tecnologías Web**

**Profesor: M.T.I.E. Irving Ulises Hernández Miguel**

**Ciclo: 2026**

Proyecto de desarrollo Full Stack implementado para la materia de **Tecnologías Web** en la **Universidad de la Sierra Sur**.


## 📺 Video de Demostración y Explicación



## 📖 Descripción del Proyecto
El **Asistente Inteligente de Admisión UNSIS** es una aplicación web integral diseñada para guiar, orientar y optimizar la experiencia de los aspirantes durante el proceso de solicitud de fichas de ingreso a la institución. 

A través de una interfaz interactiva potenciada por Inteligencia Artificial (mediante la plataforma de automatización de agentes conversacionales **Botpress**), el sistema resuelve dudas frecuentes en tiempo real sobre:
* 📄 **Proceso de Admisión:** Pasos cronológicos para la obtención de la ficha.
* 📋 **Requisitos Académicos:** Criterios mínimos de elegibilidad y perfiles de ingreso.
* 📁 **Documentación Requerida:** Certificados, identificaciones y formatos necesarios para el cotejo.
* 🎓 **Oferta Educativa:** Información detallada sobre las licenciaturas e ingenierías de la universidad.
* ❓ **Preguntas Frecuentes:** Respuestas automáticas sobre costos, fechas de exámenes y ubicación del campus.


## 🏗️ Arquitectura del Sistema

El proyecto implementa una arquitectura desacoplada y estructurada que separa limpiamente las responsabilidades del cliente, el servidor y el asistente de IA:

proyecto_chatbot-unsis/
├── public/                 # Contenido estático servido al cliente (Frontend)
│   ├── index.html          # Estructura principal y 
diseño responsivo
│   ├── style.css            # Estilos
carga de scripts externos         personalizados y 
│   └── script.js           # Lógica del lado del cliente e inicialización de IA
├── server/                 # Lógica de la aplicación del lado del servidor (Backend)
│   └── server.js           # Servidor Express, routing y configuración de estáticos
├── package.json            # Configuración de dependencias y scripts de Node.js
└── README.md               # Documentación principal del proyecto

