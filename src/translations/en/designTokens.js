export default {
  title: "Design tokens",
  description:
    "Variables that store values for the base layer of your design system, like colour and typography. They’re used in components, so changes on this level will resonate throughout the whole system.",
  sections: {
    "dt-color": {
      title: "Colour",
      description:
        "Not only an efficient way to showcase your brand, but also an efficient way to communicate with your users. Colour palettes created with purpose over aesthetics in mind can help you create intuitive design patterns by adding meaning to your interface.",
      checklist: {
        "dt-color-a11y": {
          title: "Accessibility",
          description:
            "Make sure to have accessible pairings between the main colours in your palette. More importantly, make sure that your background and text colours have at least an AA standard contrast ratio between them.",
        },
        "dt-color-functional": {
          title: "Functional colours",
          description:
            "Besides your brand colours, make sure to have colours defined and made into variables for functions like disabled states, backgrounds, actions and high contrast text.",
        },
        "dt-color-dark-mode": {
          title: "Dark mode",
          description:
            "Preparing a dark mode version of your colour palette will allow your design system to adapt to dark mode and respect what your user wants to see.",
        },
        "dt-color-guidelines": {
          title: "Guidelines",
          description:
            "Provide guidelines on how and when to use the colours in your palette, what to keep in mind when working with them and how not to use them.",
        },
      },
    },
    "dt-layout": {
      title: "Layout",
      description:
        "A well thought out layout goes a long way. Consistent use of a grid and spacing makes it easier for your users to scan the user interface and grasp the content.",
      checklist: {
        "dt-layout-units": {
          title: "Units",
          description:
            "Units are the most granular building blocks for layout. Defining a set of values with consistent increments (such as 4, 8, 12 and 16 for a 4-point system) will provide you with the foundation when you’re designing your grid and spacing values.",
        },
        "dt-layout-grid": {
          title: "Grid",
          description:
            "Every layout should sit on a grid that brings order and hierarchy to the interface. Define a grid separately for mobile, tablet and desktop devices with columns, gutters, and margins so your interface can adapt to any platform easily.",
        },
        "dt-layout-breakpoints": {
          title: "Breakpoints",
          description:
            "Predefine the screen sizes and orientations your grid will adapt to.",
        },
        "dt-layout-spacing": {
          title: "Spacing",
          description:
            "Horizontal and vertical rhythm plays a big role in a layout. You should provide easy methods for adding space between interface elements independent of your grid.",
        },
      },
    },
    "dt-typography": {
      title: "Typography",
      description:
        "Typography is one of the main ways you surface content in products. A clear hierarchy and contrasting styles in your typography scale will make things easier to read and help with the overall structure of your product. It’s also an opportunity to visualise your brand character and presence.",
      checklist: {
        "dt-typography-mobile": {
          title: "Responsiveness",
          description:
            "Desktop devices can usually afford to have bigger font sizes compared to mobile devices. Creating a typography scale that adapts to the viewport size will help with a more meaningful hierarchy and layout.",
        },
        "dt-typography-grid": {
          title: "Grid relation",
          description:
            "Font sizes and leading should match your grid to allow better pairing between text and other UI elements. A good example of this is text paired with icons with bounding boxes.",
        },
        "dt-typography-readability": {
          title: "Readability",
          description:
            "Optimising the letter spacing (tracking), line height (leading) and line length for your typography scale will help with the readability of text.",
        },
        "dt-typography-performance": {
          title: "Performance",
          description:
            "Custom fonts need to be downloaded before they can be displayed, especially on the web. Make sure that you have sensible fallbacks and fast loading time for your typography assets. Using system fonts solves this performance problem.",
        },
        "dt-typography-guidelines": {
          title: "Guidelines",
          description:
            "Provide guidelines on how and when to use the pairings in your typography scale, what to keep in mind when working with them and how not to use them.",
        },
      },
    },
    "dt-iconography": {
      title: "Iconography",
      description:
        "Icons are symbols that represent functionality or content. They’re especially recognisable and helpful in user interfaces since their meaning can be understood at a glance. hough they can be used just for decoration, their full potential can be realised when they’re used meaningfully and consistently.",
      checklist: {
        "dt-iconography-a11y": {
          title: "Accessibility",
          description:
            "For icons that convey a meaning or serve a function, offer a default accessible name which expresses that same meaning or function. This name may be used by screen readers and other assistive technologies to orient the user about the interface. For purely decorative icons, a name is not required. If your design system exports front-end code, ensure that the icon name is included, for example using aria-label.",
        },
        "dt-iconography-style": {
          title: "Style",
          description:
            "Make sure that your icon family makes visual sense as a whole. Picking an outlined or filled style and sticking with it will lead to better visual consistency and predictability.",
        },
        "dt-iconography-naming": {
          title: "Naming",
          description:
            "Name your icons based on their communicative purpose, rather than how they look. For instance, a triangular media player play button icon should be named 'play', not 'triangle'. You can still add related keywords to improve discoverability.",
        },
        "dt-iconography-grid": {
          title: "Relation with grid",
          description:
            "Draw your icons in a bounding box that plays well with your grid. This makes for a better pairing with other UI elements. A good example of this would be icons with bounding boxes paired with text.",
        },
        "dt-iconography-sizes": {
          title: "Sizes",
          description:
            "Provide different sizes for icons that correlate to your grid. Provide a minimum size and remove unnecessary detail for your icons for smaller sizes.",
        },
        "dt-iconography-keywords": {
          title: "Keywords",
          description:
            "Adding keywords will improve the discoverability of each icon and provide a better user experience for anyone using your system.",
        },
        "dt-iconography-reserved": {
          title: "Reserved icons",
          description:
            "Reserving icons that represent common actions will prevent their use in any other context. System icons for navigation or adding and deleting are a good example. This leads to a more intuitive user experience.",
        },
        "dt-iconography-guidelines": {
          title: "Guidelines",
          description:
            "Provide guidelines on how and when to use icons, what to keep in mind when working with them and how not to use them.",
        },
      },
    },
  },
};
