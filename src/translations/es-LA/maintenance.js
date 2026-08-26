export default {
  title: "Mantenimiento",
  description:
    "Los sistemas de diseño no son diferentes de cualquier otro proyecto que tu equipo pueda emprender. Para construir y mantener uno con éxito, necesitas una estrategia clara que se ejecute bien día a día, y tendrás que crear oportunidades para que tus colegas den feedback y así ayudar a construir tu sistema de diseño en conjunto.",

  sections: {
    "m-documentation": {
      title: "Documentación",
      description:
        "Los recursos de documentación son una parte fundamental de cualquier sistema de diseño, ya que ahorran tiempo y esfuerzo al equipo y a todos los que usan el sistema. Permiten que las personas aprendan a manejarse y encuentren respuestas a las preguntas más comunes sin contactar al equipo.",
      checklist: {
        "m-documentation-principles": {
          title: "Principios del sistema de diseño",
          description:
            "Enumera tus principios fundamentales al construir un sistema de diseño para que diseñadores y desarrolladores conozcan tus valores y cuáles son los principales factores en la toma de decisiones de tu equipo.",
        },
        "m-documentation-start": {
          title: "Primeros pasos",
          description:
            "Guía a otros a través de los primeros pasos para configurar y usar tu sistema de diseño, lo que puede ayudarlos a construir su primera funcionalidad o producto sin contactarte directamente.",
        },
        "m-documentation-design": {
          title: "Buenas prácticas de diseño",
          description:
            "Comparte consejos sobre cómo diseñar productos usando el sistema de diseño de forma escalable, evitar errores comunes y aprovechar tu herramienta de diseño al máximo.",
        },
        "m-documentation-dev": {
          title: "Buenas prácticas de desarrollo",
          description:
            "Comparte consejos sobre cómo desarrollar productos usando el sistema de diseño, las dependencias técnicas recomendadas y cómo evitar errores comunes.",
        },
        "m-documentation-anatomy": {
          title: "Anatomía de los componentes",
          description:
            "Ofrece una visión general de la anatomía de diseño de los componentes para ayudar a todos a entender las limitaciones del layout del componente y qué partes de él son personalizables.",
        },
        "m-documentation-props": {
          title: "Propiedades de los componentes",
          description:
            "Documenta las propiedades que soportan tus componentes tanto en diseño como en código. Recomendamos alinear la mayoría de ellas entre plataformas para un proceso de handoff de diseño más fluido.",
        },
        "m-documentation-composition": {
          title: "Ejemplos de composición de componentes",
          description:
            "Al construir componentes de bajo nivel que soportan slots para insertar otro contenido, proporciona ejemplos de cómo usarlos para crear composiciones más avanzadas.",
        },
        "m-documentation-sandbox": {
          title: "Ejemplo de producto sandbox",
          description:
            "Si no tienes una forma de probar tus componentes en el producto por tu cuenta, puedes construir una aplicación simple que simule layouts reales de producto para probar cómo se comportan tus componentes en la práctica y probar nuevas funcionalidades del sistema de diseño antes de lanzarlas.",
        },
        "m-documentation-env": {
          title: "Soporte de navegador / sistema operativo",
          description:
            "Define el nivel de soporte que brindas para varios sistemas operativos y navegadores, y asegúrate de alinearte con el producto en este tema.",
        },
        "m-documentation-release": {
          title: "Ciclo de lanzamiento",
          description:
            "Establece y documenta un ciclo de lanzamiento predecible para las versiones mayores que incluyen cambios que rompen compatibilidad. De esta forma, los equipos de producto pueden planificar las migraciones de su lado.",
        },
      },
    },
    "m-local": {
      title: "Librerías locales",
      description:
        "El alcance del sistema de diseño suele ser construir los patrones repetitivos fundamentales para aumentar la velocidad de los equipos de producto. Eso significa que no implementarás todos los elementos de UI por tu cuenta. Los equipos de producto seguirán construyendo componentes locales usando el sistema de diseño para resolver sus escenarios específicos.",
      checklist: {
        "m-local-when": {
          title: "Cuándo construir",
          description:
            "Comparte tus expectativas sobre cuándo los equipos de producto deberían construir componentes personalizados en lugar de solicitar una nueva funcionalidad en el sistema de diseño o usar un componente existente.",
        },
        "m-local-types": {
          title: "Librerías horizontales y verticales",
          description:
            "Describe la diferencia entre las librerías horizontales usadas en múltiples productos y las librerías verticales usadas solo por el equipo que las construye.",
        },
        "m-local-expectations": {
          title: "Expectativas de la librería",
          description:
            "Documenta el conjunto mínimo de requisitos para lanzar una librería local. Describe tus expectativas sobre la calidad, la documentación y el mantenimiento de la librería.",
        },
        "m-local-release": {
          title: "Alineación del ciclo de lanzamiento",
          description:
            "Asegúrate de que las librerías locales estén sincronizadas con el ciclo de lanzamiento del sistema de diseño. Deberían soportar tus versiones mayores recién publicadas del sistema para evitar bloquear la actualización del producto.",
        },
      },
    },
    "m-process": {
      title: "Procesos del equipo",
      description:
        "Todos los equipos que escalaron con éxito su sistema de diseño lo hicieron estableciendo procesos robustos para trabajar con sus stakeholders y la comunidad. A medida que sigas desarrollando el sistema, estos te ahorrarán incontables horas y te permitirán evitar responder las mismas preguntas una y otra vez.",
      checklist: {
        "m-process-log": {
          title: "Registro de toma de decisiones",
          description:
            "Para los temas que tienes que manejar repetidamente, lleva registros de cómo tomas esas decisiones. No te perderás ningún requisito contextual y evitarás tener reuniones adicionales de alineación.",
        },
        "m-process-roadmap": {
          title: "Roadmap",
          description:
            "Intenta planificar tu trabajo a largo plazo y asignar solo una parte de tu tiempo al soporte de la comunidad. Esto te ayudará a hacer evolucionar el sistema con el tiempo en lugar de enfocarte solo en correcciones de bugs menores y solicitudes de funcionalidades.",
        },
        "m-process-stakeholder": {
          title: "Mapeo de stakeholders",
          description:
            "Enumera los principales stakeholders de todos los productos que estás soportando. Podrían ser personas del desarrollo y el diseño, pero tampoco te pierdas a los líderes de personas que pueden ayudarte a aumentar la adopción.",
        },
        "m-process-analytics": {
          title: "Analítica",
          description:
            "Define una forma de medir el uso y el valor de las librerías y herramientas que proporcionas. Puedes empezar con métricas fáciles de configurar, como la analítica de tu sitio de documentación, encuestas de feedback o analítica de uso de componentes en tu herramienta de diseño.",
        },
        "m-process-shifts": {
          title: 'Turnos de soporte continuo',
          description:
            "Si varias personas trabajan en la misma plataforma, distribuye y planifica el trabajo de soporte a la comunidad entre ellas. Eso permitirá que los miembros del equipo se enfoquen en el trabajo planificado en lugar de distraerse con las solicitudes y preguntas.",
        },
        "m-process-sla": {
          title: "SLA",
          description:
            "Define los plazos de cuánto tardas en manejar las solicitudes entrantes y los reportes de bugs para ayudar a los equipos de producto a entender si deberían esperar tu lanzamiento o encontrar una solución temporal.",
        },
      },
    },
    "m-community": {
      title: "Soporte a la comunidad",
      description:
        "Es crucial ayudar a los diseñadores y desarrolladores de producto a ser más productivos con el sistema de diseño, corregir los bugs que encuentran en los productos y atender sus necesidades. Para asegurarte de recibir ese feedback, tu objetivo es hacer que sea fácil y seguro para todos compartir sus hallazgos.",
      checklist: {
        "m-community-channels": {
          title: "Canales de soporte",
          description:
            "Crea canales de soporte en las herramientas que usas para comunicarte. Es una buena idea separarlos por plataforma para que a todos les resulte cómodo compartir detalles específicos de la plataforma de sus problemas.",
        },
        "m-community-template": {
          title: "Plantillas",
          description:
            "Prepara plantillas para crear solicitudes de funcionalidades y reportes de bugs. Úsalas para pedir enlaces de reproducción, propuestas de diseño y otra información contextual que necesitas para tomar decisiones, en lugar de buscar esa información manualmente.",
        },
        "m-community-updates": {
          title: "Actualizaciones periódicas",
          description:
            "Estás arriesgando la adopción de las nuevas funcionalidades si solo te enfocas en la implementación pero nunca hablas de ello con la comunidad. Definir una cadencia para tus actualizaciones ayuda a crear el hábito en los equipos de producto de venir a ver qué hay de nuevo en el sistema y cómo pueden aprovecharlo.",
        },
        "m-community-slots": {
          title: "Horas de atención",
          description:
            "Habrá preguntas que no puedan resolverse en un solo ticket o chat. Mantén algunos espacios reservables en el calendario para que otros equipos reciban una consultoría o discutan la implementación de su funcionalidad con tu equipo.",
        },
      },
    },
    "m-contribution": {
      title: "Contribución",
      description:
        "Construir sistemas de diseño es un juego de equipo. Asegúrate de incluir a los equipos de producto en el camino, ayudarlos a contribuir al sistema y permitirles abogar por él en toda la empresa.",
      checklist: {
        "m-contribution-rules": {
          title: "Reglas de la casa para el sistema",
          description:
            "Explica cómo funciona tu proceso de diseño y desarrollo a los equipos de producto. Los equipos de sistemas de diseño suelen moverse más lento que los equipos de producto, ya que hay más responsabilidad en tomar decisiones escalables en los componentes que afectan a todo el producto.",
        },
        "m-contribution-guidelines": {
          title: "Pautas de contribución",
          description:
            "Explica qué necesitan configurar los contribuidores para preparar su entorno de diseño y desarrollo para agregar y probar nuevas funcionalidades.",
        },
        "m-contribution-template": {
          title: "Plantilla de propuesta de funcionalidad",
          description:
            "Prepara una plantilla estándar para iniciar el trabajo en una nueva funcionalidad. Esta plantilla debería asegurar que los cambios propuestos se apliquen en todas las plataformas y no rompan el uso existente de los componentes en el producto.",
        },
        "m-contribution-engagement": {
          title: "Participación",
          description:
            "Asegúrate de destacar y recompensar el trabajo de los contribuidores al hacer anuncios sobre las nuevas funcionalidades, y ayúdalos a obtener el apoyo de sus managers cuando contribuyen.",
        },
      },
    },
  },
};
