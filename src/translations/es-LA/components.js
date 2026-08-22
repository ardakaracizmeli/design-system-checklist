export default {
  title: "Componentes principales",
  description:
    "Los componentes son los principales bloques de construcción de las interfaces de usuario. Construir una librería de componentes reutilizables mejora tu flujo de desarrollo de producto al reducir la deuda de diseño y técnica y acelerar el proceso. Los componentes principales no pueden descomponerse en piezas más granulares sin perder su significado.",
  sections: {
    "c-accordion": {
      title: "Acordeón",
      description:
        "El acordeón alterna la visibilidad de regiones de contenido cuando se presiona el elemento disparador.",
      checklist: {
        "c-accordion-active": {
          title: "Estado activo",
          description:
            "El acordeón tiene dos estados para alternar la visibilidad de su contenido. Si el disparador del acordeón muestra un ícono, debería distinguirse visualmente entre ambos estados.",
        },
        "c-accordion-composition": {
          title: "Composición",
          description:
            "El área de contenido debería ser lo suficientemente flexible para soportar varios tipos de contenido, incluyendo otros componentes.",
        },
        "c-accordion-transition": {
          title: "Transición al alternar",
          description:
            "Agrega una animación sutil para ayudar a los usuarios a entender y seguir el comportamiento del componente al cambiar entre estados.",
        },
        "c-accordion-a11y-relation": {
          title: "Relación entre contenido y disparador",
          description:
            "Enfocar el área de contenido con tecnologías de asistencia debería anunciar contexto adicional del elemento disparador.",
        },
      },
    },
    "c-alert": {
      title: "Alerta",
      description:
        "La alerta muestra un mensaje prominente sobre toda la página o un área específica de ella.",
      checklist: {
        "c-alert-colors": {
          title: "Colores",
          description:
            "Es crucial diferenciar la apariencia visual de la alerta según su rol. Si usas colores de fondo para diferenciar el rol, asegúrate de que haya suficiente relación de contraste con el contenido mostrado dentro de la alerta.",
        },
        "c-alert-title": {
          title: "Soporte de título",
          description:
            "Soportar un título puede ayudar a tu usuario a entender más rápido el contexto del mensaje en alertas más largas.",
        },
        "c-alert-icon": {
          title: "Soporte de ícono",
          description:
            "El ícono ilustra el rol de la alerta y aporta una pista adicional sobre ella para personas daltónicas.",
        },
        "c-alert-actions": {
          title: "Acciones complementarias",
          description:
            "Las acciones en la alerta deberían relacionarse con su texto y ofrecer una forma de reaccionar al mensaje enviado al usuario.",
        },
        "c-alert-responsive": {
          title: "Adaptabilidad",
          description:
            "La alerta puede adaptarse al tamaño del viewport, normalmente ocupando todo el ancho en móvil para ahorrar espacio.",
        },
        "c-alert-a11y-roles": {
          title: "Roles de accesibilidad",
          description:
            "Al usar tecnologías de asistencia, las alertas deberían anunciar correctamente su rol de accesibilidad.",
        },
      },
    },
    "c-avatar": {
      title: "Avatar",
      description:
        "Miniatura de la foto de un usuario, una organización o una representación visual de otros tipos de contenido.",
      checklist: {
        "c-avatar-image": {
          title: "Imagen",
          description:
            "Los avatares deberían enmascarar una imagen dentro de su forma y funcionar con cualquier tamaño de imagen, ya que pueden obtenerla de fuentes de datos desconocidas.",
        },
        "c-avatar-image-fallback": {
          title: "Fallback de imagen",
          description:
            "Cuando no se pasa una imagen o hay un error al cargarla, los avatares deberían poder mostrar un fallback con una imagen diferente, un ícono o iniciales de texto.",
        },
        "c-avatar-sizes": {
          title: "Tamaños",
          description:
            "Hay muchos contextos para usar un avatar, que requieren distintos tamaños del componente. Usa al menos 2-3 tamaños diferentes para proyectos promedio y asegúrate de que haya al menos un tamaño pequeño disponible.",
        },
        "c-avatar-colors": {
          title: "Colores",
          description:
            "Debería aplicarse un color de fondo a la forma del avatar cuando se usa sin imagen. Asegúrate de que los íconos y el texto tengan suficiente relación de contraste con el fondo según el estándar WCAG AA.",
        },
        "c-avatar-shape": {
          title: "Forma",
          description:
            "Los avatares podrían soportar múltiples formas, como cuadrada o circular, según el área donde se usen.",
        },
        "c-avatar-group": {
          title: "Grupos de avatares",
          description:
            "Se pueden apilar múltiples avatares juntos para representar a un grupo de usuarios.",
        },
        "c-avatar-a11y-label": {
          title: "Etiqueta de accesibilidad",
          description:
            "El avatar debería proporcionar una etiqueta de accesibilidad cuando se usa para imágenes no decorativas y no tiene una representación de texto de su contenido.",
        },
      },
    },
    "c-badge": {
      title: "Insignia",
      description:
        "Elemento compacto que representa el estado de un objeto o la entrada de un usuario.",
      checklist: {
        "c-badge-colors": {
          title: "Colores",
          description:
            "Las insignias pueden cumplir varios roles en tu producto, y tener un color predefinido para cada rol debería ayudar a los usuarios a entender su significado. Al cambiar los colores, asegúrate de que el texto tenga suficiente relación de contraste con el fondo según el estándar WCAG AA.",
        },
        "c-badge-variants": {
          title: "Variantes",
          description:
            "Según dónde se rendericen las insignias en el producto, podrías soportar múltiples variantes del componente. Por ejemplo, puedes tener algunas insignias con un fondo atenuado para no llamar demasiado la atención.",
        },
        "c-badge-sizes": {
          title: "Tamaños",
          description:
            "Las insignias pueden venir en múltiples tamaños según dónde se usen. Por ejemplo, puedes usar el tamaño grande para páginas de marketing.",
        },
        "c-badge-icon-support": {
          title: "Soporte de ícono",
          description:
            "Para ilustrar mejor el significado de una insignia, puedes mostrar un ícono junto al texto. Asegúrate de que en insignias pequeñas el contenido del ícono siga siendo reconocible.",
        },
        "c-badge-dismiss": {
          title: "Acción para descartar",
          description:
            "Las insignias pueden usarse como una forma dinámica de mostrar valores seleccionados, y debería haber una manera de descartarlas.",
        },
        "c-badge-empty": {
          title: "Estado vacío",
          description:
            "Las insignias pueden usarse sin ningún contenido de texto adentro. Eso normalmente requiere cambiar sus estilos para preservar la forma correcta.",
        },
        "c-badge-positioning": {
          title: "Posicionamiento",
          description:
            "Cuando se usa como insignia de estado, como un indicador de notificación, deberías poder posicionarla en relación con esos elementos.",
        },
      },
    },
    "c-button": {
      title: "Botón",
      description: "Elemento interactivo usado para acciones de un solo paso.",
      checklist: {
        "c-button-colors": {
          title: "Colores",
          description:
            "Los botones pueden cumplir varios roles en tu producto, y tener un color predefinido para cada rol debería ayudar a los usuarios a entender su significado. Al cambiar los colores, asegúrate de que el texto tenga suficiente relación de contraste con el fondo según el estándar WCAG AA.",
        },
        "c-button-variants": {
          title: "Variantes",
          description:
            "Al usar múltiples botones, debería haber una forma de diferenciar entre acciones primarias y secundarias. Los botones pueden cumplir distintos roles para el usuario o usarse en varias superficies, y tienen que cambiar su apariencia.",
        },
        "c-button-sizes": {
          title: "Tamaños",
          description:
            "Según dónde se use un botón, puede venir en múltiples tamaños. Por ejemplo, puedes usar el tamaño pequeño para áreas densas de tu aplicación.",
        },
        "c-button-icon": {
          title: "Soporte de ícono",
          description:
            "Los íconos comunican fácilmente el propósito del botón cuando se usan junto a su etiqueta, o pueden usarse sin texto cuando no hay espacio suficiente. Asegúrate de proporcionar una etiqueta de accesibilidad cuando se usa solo con un ícono.",
        },
        "c-button-hover": {
          title: "Estado hover",
          description:
            "Muestra claramente que el botón es interactivo cuando el cursor del mouse pasa por encima.",
        },
        "c-button-active": {
          title: "Estado activo",
          description:
            "Proporciona una señal visual cuando se presiona un botón, se usa para seleccionar un valor o alterna otros elementos de la página.",
        },
        "c-button-loading": {
          title: "Estado de carga",
          description:
            "Indica cuándo los usuarios tienen que esperar el resultado de su acción tras presionar un botón. Si se usa un spinner para mostrar este estado, asegúrate de que no cambie el ancho o el alto original del botón.",
        },
        "c-button-disabled": {
          title: "Estado deshabilitado",
          description:
            "Muestra visualmente que el botón no es interactivo e impide que sea presionado.",
        },
        "c-button-a11y-role": {
          title: "Rol de accesibilidad",
          description:
            "El botón debería anunciar correctamente los roles de accesibilidad de botón o enlace y resolverlo automáticamente según las propiedades que se le pasen.",
        },
        "c-button-a11y-focus": {
          title: "Indicador de foco",
          description:
            "El botón debería tener un indicador de foco visible cuando se enfoca usando el teclado o tecnologías de asistencia.",
        },
      },
    },
    "c-breadcrumbs": {
      title: "Migas de pan",
      description:
        "Navegación de nivel superior del producto que ayuda al usuario a entender la ubicación de la página actual y a volver a sus páginas superiores.",
      checklist: {
        "c-breadcrumbs-icon": {
          title: "Soporte de ícono",
          description:
            "Los íconos ayudan a comunicar los roles de las páginas a las que enlazan los ítems de las migas de pan. La mayoría de las veces querrás asegurarte de que se usen de forma consistente, no solo para ítems aleatorios de la lista.",
        },
        "c-breadcrumbs-disabled": {
          title: "Estado deshabilitado",
          description:
            "Cada ítem de la lista puede deshabilitarse por separado para impedir que los usuarios naveguen a esa página.",
        },
        "c-breadcrumbs-collapsed": {
          title: "Estado colapsado",
          description:
            "Si los ítems de las migas de pan no caben en el contenedor padre, la lista debería soportar colapsar ítems para mantener visibles solo los relevantes para el usuario.",
        },
        "c-breadcrumbs-separator": {
          title: "Separador personalizado",
          description:
            "Según el contexto de uso, los ítems de la lista de migas de pan pueden usar distintos estilos de separador.",
        },
      },
    },
    "c-calendar": {
      title: "Calendario",
      description:
        "Grilla que muestra los días de uno o más meses y permite a los usuarios seleccionar una sola fecha o un rango de fechas.",
      checklist: {
        "c-calendar-modes": {
          title: "Modos de visualización",
          description:
            "El calendario puede usarse en varias áreas del producto y viewports. Asegúrate de soportar distintos modos de visualización para renderizar más de un mes o un layout vertical.",
        },
        "c-calendar-selected": {
          title: "Estado seleccionado",
          description:
            "El calendario debería soportar una sola fecha y un rango de selección. Las fechas seleccionadas deberían resaltarse visualmente, y el rango entre las fechas seleccionadas debería ser visible para los usuarios.",
        },
        "c-calendar-month-selection": {
          title: "Selección de mes",
          description:
            "Para ayudar a los usuarios a navegar rangos de fechas más largos, el calendario debería ofrecer una forma sencilla de cambiar los meses mostrados.",
        },
        "c-calendar-day-names": {
          title: "Nombres de los días",
          description:
            "Proporciona etiquetas cortas para los nombres de los días de la semana además de los números de fecha, para que los usuarios naveguen más fácil la selección de fechas.",
        },
        "c-calendar-i18n": {
          title: "Internacionalización",
          description:
            "Los calendarios deberían localizarse para todas las regiones de países que soporta el producto. Eso incluye los formatos de fecha y el orden correcto de los días de la semana.",
        },
        "c-calendar-a11y-keyboard": {
          title: "Navegación por teclado",
          description:
            "Las fechas del calendario deberían poder enfocarse con el teclado y las tecnologías de asistencia. La navegación posterior entre fechas debería hacerse con las flechas del teclado o la navegación del lector de pantalla, y soportar el cambio de mes al salir de una columna o una fila.",
        },
        "c-calendar-a11y-state": {
          title: "Anuncio de estado",
          description:
            "Las fechas seleccionadas deberían ser anunciadas por las tecnologías de asistencia cuando reciben el foco.",
        },
      },
    },
    "c-card": {
      title: "Tarjeta",
      description:
        "Contenedor para agrupar información sobre temas y sus acciones relacionadas.",
      checklist: {
        "c-card-composition": {
          title: "Composición del contenido",
          description:
            "El área de contenido debería ser lo suficientemente flexible para soportar varios tipos de contenido, incluyendo otros componentes.",
        },
        "c-card-media-sections": {
          title: "Secciones de medios",
          description:
            "Las tarjetas se usan con frecuencia con contenido multimedia. Las opciones más populares son tener un área de ancho completo sobre el contenido o un área en uno de los lados de la tarjeta.",
        },
        "c-card-actions": {
          title: "Acciones complementarias",
          description:
            "Las tarjetas pueden usarse con acciones, normalmente ubicadas en la parte inferior de la tarjeta, o la tarjeta misma puede ser presionable y representar una acción.",
        },
        "c-card-responsive": {
          title: "Adaptabilidad",
          description:
            "En viewports móviles, las tarjetas suelen ocupar todo el ancho para ahorrar espacio para el contenido.",
        },
        "c-card-groups": {
          title: "Grupos de tarjetas",
          description:
            "Se pueden agrupar múltiples tarjetas en una sola lista de secciones de contenido.",
        },
      },
    },
    "c-carousel": {
      title: "Carrusel",
      description:
        "Áreas desplazables horizontalmente usadas para mostrar contenido agrupado.",
      checklist: {
        "c-carousel-navigation": {
          title: "Controles de navegación",
          description:
            "Los carruseles deberían ser accesibles para navegar su contenido en dispositivos que funcionan con mouse en lugar de eventos táctiles.",
        },
        "c-carousel-composition": {
          title: "Composición del ítem",
          description:
            "El área de contenido de los ítems del carrusel debería ser lo suficientemente flexible para soportar varios tipos de contenido, incluyendo otros componentes.",
        },
        "c-carousel-item-size": {
          title: "Tamaños de ítem",
          description:
            "El layout de los ítems debería ser flexible para soportar distintos tipos de contenido. Para dispositivos móviles, asegúrate de mostrar una parte del ítem del carrusel que no cabe en el viewport para indicar el área desplazable.",
        },
        "c-carousel-touch": {
          title: "Navegación táctil",
          description:
            "El contenido del carrusel debería renderizarse dentro de un área desplazable para soportar eventos táctiles.",
        },
        "c-carousel-responsive": {
          title: "Adaptabilidad",
          description:
            "El layout de los ítems del carrusel podría requerir ajustes según el espacio disponible.",
        },
        "c-carousel-a11y-keyboard-navigation": {
          title: "Navegación por teclado",
          description:
            "Los usuarios de teclado y tecnologías de asistencia deberían poder navegar el contenido del carrusel sin hacer clic en los controles de navegación.",
        },
      },
    },
    "c-checkbox": {
      title: "Checkbox",
      description:
        "Campo de formulario usado para seleccionar uno o varios valores de la lista.",
      checklist: {
        "c-checkbox-label": {
          title: "Etiqueta",
          description:
            "Debería haber una etiqueta de texto vinculada al campo checkbox. Hacer clic en la etiqueta también debería activar la selección del checkbox. Si la etiqueta no se renderiza en la página, las tecnologías de asistencia deberían anunciarla igualmente.",
        },
        "c-checkbox-checked": {
          title: "Estado marcado",
          description:
            "Muestra cuándo el checkbox queda seleccionado y se usa para el envío del formulario.",
        },
        "c-checkbox-error": {
          title: "Estado de error",
          description:
            "Usa un estado de error para la validación del formulario cuando el error está relacionado con el campo checkbox. Usa siempre un error de texto junto con un color de campo diferente.",
        },
        "c-checkbox-disabled": {
          title: "Estado deshabilitado",
          description:
            "Usa un estado deshabilitado para impedir las interacciones con el checkbox y quitar su valor de los valores enviados del formulario.",
        },
        "c-checkbox-indeterminate": {
          title: "Estado indeterminado",
          description:
            "Muestra visualmente cuándo el checkbox tiene elementos hijos seleccionables y solo algunos están seleccionados.",
        },
        "c-checkbox-group": {
          title: "Grupo de checkbox",
          description:
            "Los checkbox pueden agruparse para trabajar con múltiples valores al mismo tiempo.",
        },
        "c-checkbox-a11y-keyboard": {
          title: "Soporte de teclado",
          description:
            "Las selecciones del checkbox deberían activarse con el teclado. Usar elementos nativos para esto debería proporcionar este tipo de interacción automáticamente.",
        },
      },
    },
    "c-divider": {
      title: "Divisor",
      description: "Elemento para la separación visual de contenido.",
      checklist: {
        "c-divider-direction": {
          title: "Dirección",
          description:
            "Los divisores deberían separar tanto listas de contenido horizontales como verticales.",
        },
        "c-divider-a11y-role": {
          title: "Rol de accesibilidad",
          description:
            "Si el divisor cumple un rol no decorativo en el layout, su rol debería ser anunciado por las tecnologías de asistencia.",
        },
      },
    },
    "c-dropdown": {
      title: "Dropdown",
      description: "Lista de acciones contextuales que los usuarios pueden activar.",
      checklist: {
        "c-dropdown-composition": {
          title: "Composición del contenido",
          description:
            "Los dropdowns pueden usarse para menús contextuales, navegación del producto y otros propósitos. Su área de contenido debería ser lo suficientemente flexible para soportar varios tipos de contenido, incluyendo otros componentes.",
        },
        "c-dropdown-hover": {
          title: "Disparo por hover",
          description:
            "El dropdown debería soportar mostrar su contenido en eventos de hover. El mismo comportamiento debería ocurrir para los usuarios de teclado una vez que su disparador recibe el foco.",
        },
        "c-dropdown-positioning": {
          title: "Posicionamiento dinámico",
          description:
            "El contenido del dropdown debería mostrarse según la posición actual del elemento disparador en la pantalla y permanecer siempre visible para el usuario.",
        },
        "c-dropdown-responsive": {
          title: "Adaptabilidad",
          description:
            "El contenido del dropdown debería ajustarse si no cabe en la pantalla, de la misma forma en dispositivos móviles que en escritorio.",
        },
        "c-dropdown-a11y-focus": {
          title: "Retención del foco",
          description:
            "Una vez que se abre el contenido del dropdown, el anillo de foco debería moverse dentro de su área de contenido y volver al elemento disparador cuando se cierra.",
        },
        "c-dropdown-a11y-keyboard": {
          title: "Navegación por teclado",
          description:
            "El dropdown debería ser accesible para el teclado y las tecnologías de asistencia. Los usuarios deberían poder cerrar el dropdown usando una acción de cierre separada, o una vez que tabulan fuera del área de contenido.",
        },
      },
    },
    "c-icon": {
      title: "Ícono",
      description: "Contenedor de activos SVG para controlar su apariencia.",
      checklist: {
        "c-icon-colors": {
          title: "Colores",
          description:
            "Los íconos deberían soportar los valores de color disponibles en los tokens del sistema de diseño. Además, es una buena práctica soportar la herencia de color desde su elemento padre.",
        },
        "c-icon-sizes": {
          title: "Tamaños",
          description:
            "Los íconos deberían tener varios tamaños predefinidos para brindar una experiencia holística en todo el producto. Se pueden usar combinaciones tipográficas para estos valores de tamaño para asegurar que se alineen con los tamaños de texto.",
        },
        "c-icon-a11y-decoration": {
          title: "Interactividad",
          description:
            "Los íconos se usan como elementos decorativos la mayoría de las veces. Si un ícono está pensado para ser interactivo, esa funcionalidad debería incluirse usando botones, enlaces u otros componentes interactivos.",
        },
      },
    },
    "c-image": {
      title: "Imagen",
      description:
        "Utilidad para mostrar imágenes y controlar su comportamiento.",
      checklist: {
        "c-image-sizes": {
          title: "Tamaños",
          description:
            "La imagen debería ser flexible en cuanto a los tamaños soportados. Además de soportar ancho y alto, agrega soporte para relación de aspecto para escalar sus proporciones dinámicamente según el elemento padre.",
        },
        "c-image-fallback": {
          title: "Fallback de imagen",
          description:
            "Muestra un fallback cuando la URL de la imagen es incorrecta o indefinida. Puede ser una caja vacía con un fondo, un ícono o una imagen de marcador de posición estática.",
        },
        "c-image-density": {
          title: "Soporte de densidad de pantalla",
          description:
            "Según la densidad de la pantalla, deberías soportar la carga de múltiples activos de imagen de distintos tamaños y servir el relevante al usuario.",
        },
        "c-image-a11y-alt": {
          title: "Texto alternativo",
          description:
            "Cuando la imagen es no decorativa, debería proporcionar un texto alternativo que describa el contenido de la imagen.",
        },
      },
    },
    "c-link": {
      title: "Enlace",
      description:
        "Elemento de texto interactivo usado para la navegación dentro de los párrafos de texto.",
      checklist: {
        "c-link-icon": {
          title: "Soporte de ícono",
          description:
            "Se puede usar un ícono junto al enlace para comunicar su propósito. Los íconos no deberían usarse dentro de un enlace sin una etiqueta de texto.",
        },
        "c-link-colors": {
          title: "Colores",
          description:
            "Los enlaces pueden cumplir varios roles en tu producto, y tener un color predefinido para cada rol debería ayudar a los usuarios a entender su significado. Como el enlace es un elemento de texto, debería poder heredar automáticamente el color definido por su elemento padre, igual que otro contenido de texto.",
        },
        "c-link-disabled": {
          title: "Estado deshabilitado",
          description:
            "Muestra visualmente que el enlace no es interactivo e impide que sea presionado.",
        },
        "c-link-font-inheritance": {
          title: "Herencia de fuente",
          description:
            "Los enlaces deberían poder heredar los estilos tipográficos cuando se usan como parte de un elemento de texto.",
        },
        "c-link-multiline": {
          title: "Visualización multilínea",
          description:
            "Cuando se usa dentro de un párrafo de texto, los enlaces deberían soportar la visualización multilínea sin romper el flujo del texto.",
        },
        "c-link-a11y-role": {
          title: "Rol de accesibilidad",
          description:
            "Los enlaces deberían anunciar correctamente los roles de accesibilidad de botón o enlace, resolviéndolo automáticamente según las propiedades que se les pasen.",
        },
      },
    },
    "c-list": {
      title: "Lista",
      description: "La lista se usa para mostrar una lista de ítems.",
      checklist: {
        "c-list-order": {
          title: "Orden",
          description:
            "Los ítems de la lista pueden usar viñetas, numeración y otros estilos y tipos de ordenamiento.",
        },
        "c-list-composition": {
          title: "Composición del contenido",
          description:
            "Las áreas de contenido de los ítems de la lista deberían ser lo suficientemente flexibles para soportar varios tipos de contenido, incluyendo otros componentes.",
        },
        "c-list-a11y-role": {
          title: "Rol de accesibilidad",
          description:
            "Las tecnologías de asistencia deberían anunciar las listas con el rol correcto y el número de ítems mostrados.",
        },
      },
    },
    "c-loading-indicator": {
      title: "Indicador de carga",
      description:
        "Elemento animado que comunica progreso sin indicar cuánto tardará el proceso.",
      checklist: {
        "c-loading-indicator-colors": {
          title: "Colores",
          description:
            "Los indicadores de carga podrían usarse dentro de elementos con varios roles y seguir su esquema de color.",
        },
        "c-loading-indicators-sizes": {
          title: "Tamaños",
          description:
            "Los indicadores de carga podrían ofrecer múltiples tamaños, según el tamaño de las áreas donde se renderiza el indicador de carga.",
        },
        "c-loading-indicator-time": {
          title: "Duración de la carga",
          description:
            "En algunos casos, el tiempo de espera no puede determinarse. El indicador de carga debería mostrarse hasta que la carga termine o ocurra un error. En otros casos, es mejor indicar el tiempo restante hasta que la carga finalice.",
        },
        "c-loading-indicator-a11y-reduced-motion": {
          title: "Movimiento reducido",
          description:
            "El indicador de carga debería sincronizarse con la configuración de movimiento del sistema y reducir la velocidad de su animación cuando la configuración de movimiento reducido está activada.",
        },
        "c-loading-indicator-a11y-label": {
          title: "Etiqueta de accesibilidad",
          description:
            "Si el indicador de carga es independiente, proporciona una etiqueta de accesibilidad para el área de contenido que está cargando.",
        },
      },
    },
    "c-modal": {
      title: "Modal",
      description:
        "Contenedor que aparece frente al contenido principal para proporcionar información crítica o un contenido accionable.",
      checklist: {
        "c-modal-composition": {
          title: "Composición del contenido",
          description:
            "El área de contenido principal debería ser lo suficientemente flexible para soportar varios tipos de contenido, incluyendo otros componentes.",
        },
        "c-modal-actions": {
          title: "Acciones complementarias",
          description:
            "Como el contenido del modal puede ser accionable, es esencial tener un área para los elementos de acción. Esta área suele ubicarse en la parte inferior del contenedor del modal.",
        },
        "c-modal-close": {
          title: "Acción de cierre",
          description:
            "Los modales deberían ofrecer una forma directa de cerrarse, ya que bloquean el contenido cuando están abiertos. Puede ser un botón de cierre separado o una de las acciones complementarias.",
        },
        "c-modal-positioning": {
          title: "Posicionamiento",
          description:
            "Los modales pueden posicionarse en el centro de la pantalla o mostrarse como paneles deslizantes en cualquiera de los lados de la pantalla.",
        },
        "c-modal-sizes": {
          title: "Tamaños",
          description:
            "Proporciona soporte para cambiar el alto y el ancho del modal según el contenido que muestres.",
        },
        "c-modal-a11y-focus": {
          title: "Retención del foco",
          description:
            "Cuando el modal se abre, el foco del usuario debería moverse al primer elemento enfocable y permanecer atrapado dentro de él. Cuando el modal se cierra, el foco debería volver al último elemento activo.",
        },
        "c-modal-a11y-keyboard": {
          title: "Navegación por teclado",
          description:
            "Debería ser posible cerrar un modal presionando la tecla Esc, y todos los elementos enfocables dentro del contenedor del modal deberían ser accesibles con la navegación por teclado.",
        },
        "c-modal-a11y-labels": {
          title: "Etiquetado de título y subtítulo",
          description:
            "Los modales deberían usar el rol de accesibilidad correcto y estar etiquetados por los elementos de título y subtítulo. Si no hay un título o subtítulo visible, puede usarse una etiqueta de accesibilidad en su lugar.",
        },
      },
    },
    "c-pagination": {
      title: "Paginación",
      description: "La paginación permite seleccionar entre un rango de páginas.",
      checklist: {
        "c-pagination-selected": {
          title: "Estado de página seleccionada",
          description:
            "Resalta visualmente la página seleccionada en la lista y hazla no interactiva.",
        },
        "c-pagination-ranges": {
          title: "Rangos de páginas mostradas",
          description:
            "Define los rangos de páginas renderizadas alrededor de la página seleccionada. Ayuda a renderizar solo un número limitado de páginas pero permite a los usuarios navegar más rápido que avanzando de a 1 página por vez.",
        },
        "c-pagination-amount": {
          title: "Cantidad de ítems por página",
          description:
            "Proporciona una opción para seleccionar el número de ítems paginados mostrados en la página.",
        },
        "c-pagination-indeterminate": {
          title: "Cantidad indeterminada de páginas",
          description:
            "Cuando no conoces de antemano el número total de páginas disponibles, usa un modo de visualización diferente para navegar las páginas individualmente.",
        },
        "c-pagination-a11y-label": {
          title: "Anuncio de etiquetas de página completas",
          description:
            "La paginación debería proporcionar etiquetas claras y dinámicas para cada página a las tecnologías de asistencia, en lugar de solo anunciar el número sin contexto.",
        },
        "c-pagination-a11y-state": {
          title: "Anuncio de estado",
          description:
            "La paginación debería anunciar cuándo una página seleccionada recibe el foco.",
        },
      },
    },
    "c-progress": {
      title: "Barra de progreso",
      description:
        "Barra que muestra el progreso de una tarea que tarda mucho tiempo o consta de varios pasos.",
      checklist: {
        "c-progress-label": {
          title: "Etiqueta",
          description:
            "Proporciona soporte para mostrar visualmente una etiqueta que explique de qué es responsable una barra de progreso.",
        },
        "c-progress-sizes": {
          title: "Tamaños",
          description:
            "Los indicadores de carga podrían ofrecer múltiples tamaños, según el tamaño de las áreas donde se renderiza el indicador de carga.",
        },
        "c-progress-duration": {
          title: "Duración",
          description:
            "En algunos casos, el tiempo de espera no puede determinarse. El indicador de carga debería mostrarse hasta que la carga termine o ocurra un error. En otros casos, es mejor indicar el tiempo restante hasta que la carga se complete.",
        },
        "c-progress-a11y-label": {
          title: "Etiqueta de accesibilidad",
          description:
            "Proporciona soporte para agregar una etiqueta de accesibilidad en caso de que no puedas mostrar una etiqueta en la interfaz.",
        },
      },
    },
    "c-radio": {
      title: "Botón de radio",
      description:
        "El radio es un elemento de formulario usado para seleccionar una opción de una lista.",
      checklist: {
        "c-radio-label": {
          title: "Etiqueta",
          description:
            "Debería haber una etiqueta de texto vinculada al campo radio. Hacer clic en la etiqueta también debería activar la selección. Si la etiqueta no se renderiza en la página, las tecnologías de asistencia deberían anunciarla igualmente.",
        },
        "c-radio-checked": {
          title: "Estado marcado",
          description:
            "Muestra cuándo el radio queda seleccionado y se usa para el envío del formulario.",
        },
        "c-radio-error": {
          title: "Estado de error",
          description:
            "Usa un estado de error para la validación del formulario cuando el error está relacionado con el campo radio. Usa siempre un error de texto junto con un color de campo diferente.",
        },
        "c-radio-disabled": {
          title: "Estado deshabilitado",
          description:
            "Usa un estado deshabilitado para impedir las interacciones con el radio y quitar su valor de los valores enviados del formulario.",
        },
        "c-radio-group": {
          title: "Grupo de radio",
          description:
            "Los botones de radio siempre se usan como grupo para evitar bloquear la selección después de que uno de los radios queda marcado.",
        },
        "c-radio-a11y-keyboard": {
          title: "Soporte de teclado",
          description:
            "La selección del radio debería activarse con el teclado. Usar elementos nativos para esto debería proporcionar este tipo de interacción automáticamente.",
        },
      },
    },
    "c-select": {
      title: "Select",
      description:
        "El select te permite elegir un solo valor de una lista de opciones.",
      checklist: {
        "c-select-label": {
          title: "Etiqueta",
          description:
            "Las etiquetas de texto vinculadas al campo Select pueden dar a los usuarios contexto adicional. Hacer clic en la etiqueta también debería activar el dropdown del select.",
        },
        "c-select-error": {
          title: "Estado de error",
          description:
            "Usa un estado de error para la validación del formulario cuando el error está relacionado solo con el select. Muestra un ícono de error adicional para una mejor accesibilidad.",
        },
        "c-select-disabled": {
          title: "Estado deshabilitado",
          description:
            "Usa el estado deshabilitado para impedir las interacciones con el Select y quitar su valor de los valores enviados del formulario.",
        },
        "c-select-placeholder": {
          title: "Placeholder",
          description:
            "Cuando no hay ningún valor seleccionado, muestra un valor de placeholder. Puedes usar el mismo valor de placeholder para permitir que los usuarios reinicien el valor del select al predeterminado.",
        },
        "c-select-helper": {
          title: "Texto de ayuda",
          description:
            "Proporciona a los usuarios contexto adicional sobre el propósito del select y los requisitos para la selección.",
        },
        "c-select-icon": {
          title: "Soporte de ícono",
          description:
            "Agrega un área para mostrar un ícono al inicio del campo para comunicar el propósito del Select como componente o el valor seleccionado.",
        },
        "c-select-prefix": {
          title: "Prefijo",
          description:
            "Agrega un área de contenido personalizado para hacer la selección más contextual para el usuario. Por ejemplo, puedes mostrar banderas de países en tu selección de código de país.",
        },
        "c-select-sizes": {
          title: "Tamaños",
          description:
            "Según dónde se vaya a usar el select, puede venir en múltiples tamaños. Por ejemplo, puedes usar el tamaño pequeño para áreas densas de tu aplicación.",
        },
        "c-select-a11y-label": {
          title: "Etiqueta de accesibilidad",
          description:
            "En caso de que no proporciones una etiqueta de texto visual para el select, asegúrate de proporcionar igualmente una etiqueta de accesibilidad que describa el propósito del componente.",
        },
      },
    },
    "c-skeleton": {
      title: "Skeleton",
      description:
        "Marcador de posición que reemplaza los elementos de la página mientras sus datos están cargando.",
      checklist: {
        "c-skeleton-sizes": {
          title: "Tamaños",
          description:
            "El skeleton debería poder igualar componentes de varios tamaños disponibles en tu sistema de diseño para evitar desplazamientos de layout innecesarios una vez que los datos se cargan.",
        },
        "c-skeleton-shapes": {
          title: "Formas",
          description:
            "El skeleton debería poder igualar componentes de varias formas disponibles en tu sistema de diseño para mantener el estado de carga alineado con el layout real de los componentes.",
        },
        "c-skeleton-composition": {
          title: "Composición",
          description:
            "Puedes componer skeletons simples en layouts más avanzados. No tienes que mapear 1:1 la interfaz de tu aplicación con skeletons.",
        },
        "c-skeleton-a11y-motion": {
          title: "Movimiento reducido",
          description:
            "Reduce o elimina por completo la animación para la preferencia de usuario de movimiento reducido.",
        },
      },
    },
    "c-switch": {
      title: "Switch",
      description:
        "Interruptor para cambiar inmediatamente el estado de un solo ítem.",
      checklist: {
        "c-switch-label": {
          title: "Etiqueta",
          description:
            "Debería haber una etiqueta de texto vinculada al switch. Hacer clic en la etiqueta también debería activar la selección del switch. Si la etiqueta no se renderiza en la página, las tecnologías de asistencia deberían anunciarla igualmente.",
        },
        "c-switch-checked": {
          title: "Estado marcado",
          description:
            "Muestra cuándo el switch queda seleccionado y activa la funcionalidad subyacente. A menudo, un switch se usa para actualizar los datos inmediatamente después de seleccionarlo.",
        },
        "c-switch-disabled": {
          title: "Estado deshabilitado",
          description: "Usa un estado deshabilitado para impedir las interacciones con el switch.",
        },
        "c-switch-a11y-keyboard": {
          title: "Navegación por teclado",
          description:
            "La selección del switch debería activarse con el teclado. Usar elementos nativos para esto debería proporcionar este tipo de interacción automáticamente.",
        },
        "c-switch-a11y-label": {
          title: "Etiqueta de accesibilidad",
          description:
            "En caso de que no proporciones una etiqueta de texto visual para el Switch, asegúrate de proporcionar igualmente una etiqueta de accesibilidad que describa el propósito del componente.",
        },
      },
    },
    "c-tabs": {
      title: "Pestañas",
      description: "Navegación entre múltiples páginas o secciones de contenido.",
      checklist: {
        "c-tabs-composition": {
          title: "Composición del contenido",
          description:
            "El área de contenido debería ser lo suficientemente flexible para soportar varios tipos de contenido, incluyendo otros componentes.",
        },
        "c-tabs-variants": {
          title: "Variantes",
          description:
            "Para soportar distintos contextos de renderizado, las pestañas podrían soportar múltiples variantes. Por ejemplo, podrían renderizarse como pills cuando se usan directamente en la página, mientras usan una variante subrayada para las pestañas renderizadas dentro de tarjetas.",
        },
        "c-tabs-selected": {
          title: "Estado seleccionado",
          description:
            "Como las pestañas siempre muestran el contenido de uno de sus paneles, uno de los disparadores de pestaña debería estar siempre seleccionado y resaltado visualmente.",
        },
        "c-tabs-disabled": {
          title: "Estado deshabilitado",
          description:
            "Los disparadores de pestaña pueden deshabilitarse para impedir que los usuarios cambien a un panel de pestaña específico.",
        },
        "c-tabs-icon": {
          title: "Soporte de ícono",
          description:
            "Para ilustrar mejor el significado de cada pestaña, puedes mostrar un ícono junto al texto del disparador de pestaña.",
        },
        "c-tabs-equal": {
          title: "Layout de ancho igual",
          description:
            "Cuando se usan para ocupar todo el ancho del contenedor padre, los disparadores de pestaña pueden estirarse para ocupar un espacio horizontal igual.",
        },
        "c-tabs-a11y-keyboard": {
          title: "Soporte de teclado",
          description:
            "Al interactuar con las pestañas usando el teclado, deberían soportar la navegación con flechas para cambiar entre los paneles anterior y siguiente. Las teclas Inicio y Fin también deberían mover la selección al primer y al último panel, respectivamente.",
        },
      },
    },
    "c-text-area": {
      title: "Área de texto",
      description: "Campo de formulario para ingresar y editar texto multilínea.",
      checklist: {
        "c-text-area-label": {
          title: "Etiqueta",
          description:
            "Las etiquetas de texto vinculadas al área de texto pueden dar a los usuarios contexto adicional. Hacer clic en la etiqueta debería mover el foco al campo.",
        },
        "c-text-area-error": {
          title: "Estado de error",
          description:
            "Usa un estado de error para la validación del formulario cuando el error está relacionado solo con el área de texto.",
        },
        "c-text-area-disabled": {
          title: "Estado deshabilitado",
          description:
            "Usa un estado deshabilitado para impedir las interacciones con el área de texto y quitar su valor de los valores enviados del formulario.",
        },
        "c-text-area-placeholder": {
          title: "Placeholder",
          description:
            "Cuando el valor del área de texto está vacío, muestra un valor de placeholder. Asegúrate de que no se use en lugar de la etiqueta.",
        },
        "c-text-area-helper": {
          title: "Texto de ayuda",
          description:
            "Proporciona a los usuarios contexto adicional sobre el propósito del área de texto y los requisitos del valor esperado.",
        },
        "c-text-area-sizes": {
          title: "Tamaños",
          description:
            "Según dónde se use el área de texto, puede venir en múltiples tamaños. Por ejemplo, puedes usar el tamaño grande para los formularios en páginas de marketing.",
        },
        "c-text-area-a11y-label": {
          title: "Etiqueta de accesibilidad",
          description:
            "En caso de que no proporciones una etiqueta de texto visual para el área de texto, asegúrate de proporcionar igualmente una etiqueta de accesibilidad que describa el propósito del componente.",
        },
      },
    },
    "c-text-field": {
      title: "Campo de texto",
      description: "Campo de formulario para ingresar y editar texto de una sola línea.",
      checklist: {
        "c-text-field-label": {
          title: "Etiqueta",
          description:
            "Las etiquetas de texto vinculadas al campo de texto pueden dar a los usuarios contexto adicional. Hacer clic en la etiqueta debería mover el foco al campo.",
        },
        "c-text-field-error": {
          title: "Estado de error",
          description:
            "Usa un estado de error para la validación del formulario cuando el error está relacionado solo con el campo de texto.",
        },
        "c-text-field-disabled": {
          title: "Estado deshabilitado",
          description:
            "Usa un estado deshabilitado para impedir las interacciones con el campo de texto y quitar su valor de los valores enviados del formulario.",
        },
        "c-text-field-placeholder": {
          title: "Placeholder",
          description:
            "Cuando el valor del campo de texto está vacío, muestra un valor de placeholder. Asegúrate de que no se use en lugar de la etiqueta.",
        },
        "c-text-field-helper": {
          title: "Texto de ayuda",
          description:
            "Proporciona a los usuarios contexto adicional sobre el propósito del campo de texto y los requisitos del valor esperado.",
        },
        "c-text-field-icon": {
          title: "Soporte de ícono",
          description:
            "Agrega un área para mostrar un ícono al inicio del campo para comunicar el propósito del campo de texto como componente o el valor del campo.",
        },
        "c-text-field-affix": {
          title: "Prefijo / Sufijo",
          description:
            "Agrega un área de contenido personalizado para hacer la selección más contextual para el usuario. Por ejemplo, puedes mostrar proveedores de pago en el campo de texto para números de tarjeta de crédito.",
        },
        "c-text-field-sizes": {
          title: "Tamaños",
          description:
            "Según dónde se use el campo de texto, puede venir en múltiples tamaños. Por ejemplo, puedes usar el tamaño grande para los formularios en páginas de marketing.",
        },
        "c-text-field-a11y-label": {
          title: "Etiqueta de accesibilidad",
          description:
            "En caso de que no proporciones una etiqueta de texto visual para el campo de texto, asegúrate de proporcionar igualmente una etiqueta de accesibilidad que describa el propósito del componente.",
        },
      },
    },
    "c-toast": {
      title: "Toast",
      description:
        "Mensaje de notificación o pieza de información mostrada sobre el contenido de la página.",
      checklist: {
        "c-toast-composition": {
          title: "Composición del contenido",
          description:
            "El área de contenido debería ser lo suficientemente flexible para soportar varios tipos de contenido, incluyendo otros componentes.",
        },
        "c-toast-colors": {
          title: "Colores",
          description:
            "Según el rol de la notificación mostrada en el toast, puede venir en múltiples colores. Por ejemplo, puede ser rojo para notificaciones de error.",
        },
        "c-toast-icon": {
          title: "Soporte de ícono",
          description:
            "Agrega un área para mostrar un ícono al inicio del toast para comunicar el propósito de la notificación.",
        },
        "c-toast-timeout": {
          title: "Tiempo de espera",
          description:
            "Los toasts suelen descartarse tras un tiempo de espera. Asegúrate de proporcionar un tiempo lo suficientemente largo para que los usuarios lean el mensaje. Si no hay tiempo de espera, proporciona un botón para cerrar la notificación.",
        },
        "c-toast-stacking": {
          title: "Apilamiento",
          description:
            "Cuando se han disparado múltiples toasts, apílalos uno sobre otro para evitar saturar la pantalla.",
        },
        "c-toast-action": {
          title: "Acción complementaria",
          description:
            "Las acciones en las notificaciones deberían ser contextuales al propósito de la notificación. Por ejemplo, si notificas al usuario sobre la eliminación de contenido, un elemento de acción puede ayudarlo a deshacer esa operación.",
        },
        "c-toast-a11y-focus": {
          title: "Gestión del foco",
          description:
            "Cuando los toasts tienen acciones, deberían poder enfocarse desde el teclado para activarlas. Mientras el foco esté dentro del contenedor del toast, el tiempo de espera debería deshabilitarse.",
        },
        "c-toast-a11y-motion": {
          title: "Movimiento reducido",
          description:
            "Reduce o elimina por completo la animación para la preferencia de usuario de movimiento reducido.",
        },
      },
    },
    "c-tooltip": {
      title: "Tooltip",
      description:
        "Visualización de información de texto contextual al pasar el cursor o enfocar un elemento.",
      checklist: {
        "c-tooltip-positioning": {
          title: "Posicionamiento",
          description:
            "Cuando la posición predeterminada del tooltip no le permite caber en el viewport, asegúrate de cambiar dinámicamente su posición a otro valor.",
        },
        "c-tooltip-timeout": {
          title: "Tiempo de espera",
          description:
            "Espera un breve momento antes de abrir el Tooltip para asegurarte de que no se abra mientras el usuario mueve el cursor por la pantalla.",
        },
        "c-tooltip-a11y-keyboard": {
          title: "Soporte de teclado",
          description:
            "Los tooltips deberían ser accesibles no solo al pasar el mouse, sino también al enfocar el elemento disparador.",
        },
      },
    },
  },
};
