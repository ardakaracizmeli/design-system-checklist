export default {
  title: "Fundamentos",
  description:
    "Activos y tokens de diseño que almacenan los valores de la capa base de tu sistema de diseño, como el color y la tipografía. Se usan en los componentes, así que los cambios en este nivel repercutirán en todo el sistema.",
  sections: {
    "df-color": {
      title: "Color",
      description:
        "No solo una forma eficiente de mostrar tu marca, sino también una forma eficiente de comunicarte con tus usuarios. Las paletas de color creadas pensando en el propósito por encima de la estética pueden ayudarte a desarrollar patrones de diseño intuitivos al aportar significado a tu interfaz.",
      checklist: {
        "df-color-a11y": {
          title: "Accesibilidad",
          description:
            "Asegúrate de tener combinaciones accesibles entre los colores primarios de tu paleta. Más importante aún, asegúrate de que tus colores de fondo y de texto tengan al menos una relación de contraste estándar AA.",
        },
        "df-color-semantic": {
          title: "Colores semánticos",
          description:
            "Además de los colores de tu marca, asegúrate de tener colores definidos y convertidos en variables para funciones como estados deshabilitados, fondos, acciones y texto de alto contraste.",
        },
        "df-color-dark-mode": {
          title: "Modo oscuro",
          description:
            "Preparar una versión en modo oscuro de tu paleta de color permitirá que tu sistema de diseño se adapte a las preferencias de color del sistema operativo del usuario.",
        },
        "df-color-guidelines": {
          title: "Pautas",
          description:
            "Proporciona pautas sobre cómo y cuándo usar los colores de tu paleta, qué tener en cuenta al trabajar con ellos y cómo no usarlos.",
        },
      },
    },
    "df-layout": {
      title: "Layout",
      description:
        "Un layout bien pensado marca una gran diferencia. El uso consistente de una grilla y del espaciado facilita que tus usuarios escaneen la interfaz y comprendan el contenido.",
      checklist: {
        "df-layout-units": {
          title: "Unidades",
          description:
            "Las unidades son los bloques de construcción más granulares del layout. Definir un conjunto de valores con incrementos consistentes (como 4, 8, 12 y 16 para un sistema de 4 puntos) proporcionará la base para diseñar tu grilla y tus valores de espaciado.",
        },
        "df-layout-grid": {
          title: "Grilla",
          description:
            "Todo layout debería apoyarse sobre una grilla que aporte orden y jerarquía a la interfaz. Define una grilla por separado para dispositivos móviles, tablets y escritorio, con columnas, canales (gutters) y márgenes, para que tu interfaz pueda adaptarse rápidamente a cualquier plataforma.",
        },
        "df-layout-breakpoints": {
          title: "Breakpoints",
          description:
            "Predefine los tamaños de pantalla y las orientaciones a los que se adaptará tu grilla.",
        },
        "df-layout-spacing": {
          title: "Espaciado",
          description:
            "El ritmo horizontal y vertical juega un papel importante en un layout. Deberías proporcionar métodos sencillos para agregar espacio entre los elementos de la interfaz de forma independiente de tu grilla.",
        },
      },
    },
    "df-typography": {
      title: "Tipografía",
      description:
        "La tipografía es una de las principales formas en que muestras el contenido en los productos. Una jerarquía clara y estilos contrastantes en tu escala tipográfica harán que todo sea más fácil de leer y ayudarán con la estructura general de tu producto. También es una oportunidad para visualizar el carácter y la presencia de tu marca.",
      checklist: {
        "df-typography-mobile": {
          title: "Adaptabilidad",
          description:
            "Los dispositivos de escritorio suelen poder permitirse tamaños de fuente más grandes en comparación con los dispositivos móviles. Crear una escala tipográfica que se adapte al tamaño del viewport ayudará a lograr una jerarquía y un layout más significativos.",
        },
        "df-typography-grid": {
          title: "Relación con la grilla",
          description:
            "Los tamaños de fuente y el interlineado deberían coincidir con tu grilla para permitir una mejor combinación entre el texto y otros elementos de la interfaz. Un buen ejemplo de esto es el texto combinado con íconos que tienen cajas contenedoras.",
        },
        "df-typography-readability": {
          title: "Legibilidad",
          description:
            "Optimizar el espaciado entre letras (tracking), la altura de línea (interlineado) y el largo de línea de tu escala tipográfica ayudará con la legibilidad del texto.",
        },
        "df-typography-performance": {
          title: "Rendimiento",
          description:
            "Las fuentes personalizadas necesitan descargarse antes de poder mostrarse, especialmente en la web. Asegúrate de tener fallbacks sensatos y un tiempo de carga rápido para tus activos tipográficos. Usar fuentes del sistema resuelve este problema de rendimiento.",
        },
        "df-typography-guidelines": {
          title: "Pautas",
          description:
            "Proporciona pautas sobre cómo y cuándo usar las combinaciones de tu escala tipográfica, qué tener en cuenta al trabajar con ellas y cómo no usarlas.",
        },
      },
    },
    "df-elevation": {
      title: "Elevación",
      description:
        "La elevación controla la distancia relativa entre dos superficies a lo largo del eje z. En modo claro, suele resaltarse mediante el valor de sombra aplicado a una superficie, mientras que en modo oscuro se comunica usando el valor de color de fondo.",
      checklist: {
        "df-elevation-shadows": {
          title: "Sombras",
          description:
            "Proporciona múltiples valores de sombra según los niveles de elevación soportados. La mayoría de las veces necesitarás de 3 a 4 niveles de elevación en tu producto.",
        },
        "df-elevation-background": {
          title: "Colores de fondo",
          description:
            "Cada valor de sombra debería tener un color de fondo vinculado. En modo claro, estos colores podrían resolverse todos al color blanco, ya que se usa junto con la sombra. En modo oscuro, se usarán en lugar de la sombra para comunicar la distancia en el eje z de una superficie.",
        },
        "df-elevation-z": {
          title: "Z-index",
          description:
            "Define un sistema de valores de z-index para controlar qué elementos tienen prioridad para renderizarse por encima de los demás.",
        },
      },
    },
    "df-motion": {
      title: "Movimiento",
      description:
        "Los valores de movimiento compartidos proporcionan una experiencia de usuario más coherente y una mejor alineación con la marca.",
      checklist: {
        "df-motion-easing": {
          title: "Easing",
          description:
            "Proporciona funciones de easing estándar que se usen en todo el sistema para las transiciones de los componentes. Como punto de partida, puedes usar funciones estándar, aceleradas y desaceleradas que deberían cubrir los casos de uso comunes de los componentes.",
        },
        "df-motion-duration": {
          title: "Duración",
          description:
            "Define múltiples valores para la duración de tus animaciones para mantener las transiciones de los componentes consistentes en todo el producto.",
        },
        "df-motion-a11y": {
          title: "Accesibilidad",
          description:
            "Presta atención a las preferencias de movimiento reducido del usuario y haz que las animaciones sean menos prominentes o elimínalas por completo.",
        },
      },
    },
    "df-iconography": {
      title: "Iconografía",
      description:
        "Los íconos son símbolos que representan funcionalidad o contenido. Son especialmente reconocibles y útiles en las interfaces de usuario, ya que su significado puede entenderse de un vistazo. Aunque pueden usarse solo como decoración, su máximo potencial se alcanza cuando se usan de forma significativa y consistente.",
      checklist: {
        "df-iconography-a11y": {
          title: "Accesibilidad",
          description:
            "Para los íconos que transmiten un significado o cumplen una función, ofrece un nombre accesible por defecto que exprese ese mismo significado o función. Los lectores de pantalla y otras tecnologías de asistencia pueden usar este nombre para orientar al usuario sobre la interfaz. Para íconos puramente decorativos, no se requiere un nombre. Si tu sistema de diseño exporta código front-end, asegúrate de que el nombre del ícono se incluya, por ejemplo, usando un aria-label.",
        },
        "df-iconography-style": {
          title: "Estilo",
          description:
            "Asegúrate de que tu familia de íconos tenga sentido visual como un todo. Elegir un estilo de contorno (outlined) o relleno (filled) y mantenerlo llevará a una mejor consistencia visual y predictibilidad.",
        },
        "df-iconography-naming": {
          title: "Nomenclatura",
          description:
            "Nombra tus íconos según su propósito comunicativo en lugar de cómo se ven. Por ejemplo, el ícono triangular de un botón de reproducción debería llamarse 'play', no 'triángulo'. Igual puedes agregar palabras clave relacionadas para mejorar la descubribilidad.",
        },
        "df-iconography-grid": {
          title: "Relación con la grilla",
          description:
            "Dibuja tus íconos en una caja contenedora que combine bien con tu grilla. Esto permite una mejor combinación con otros elementos de la interfaz. Un buen ejemplo serían los íconos con cajas contenedoras combinados con texto.",
        },
        "df-iconography-keywords": {
          title: "Palabras clave",
          description:
            "Agregar palabras clave mejorará la descubribilidad de cada ícono y proporcionará una mejor experiencia para cualquiera que use tu sistema.",
        },
        "df-iconography-reserved": {
          title: "Íconos reservados",
          description:
            "Reservar íconos que representan acciones comunes evitará su uso en cualquier otro contexto. Los íconos de sistema para navegación o para agregar y eliminar son buenos ejemplos. Esto lleva a una experiencia de usuario más intuitiva.",
        },
        "df-iconography-guidelines": {
          title: "Pautas",
          description:
            "Proporciona pautas sobre cómo y cuándo usar los íconos, qué tener en cuenta al trabajar con ellos y cómo no usarlos.",
        },
      },
    },
  },
};
