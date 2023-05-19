export default {
  global: {
    componenteFormativo: 'Estandarización de métodos y tiempos de trabajo',
    descripcionCurso:
      'El estudio del trabajo se compone inicialmente por el estudio de métodos para su implementación, desde la selección del proceso hasta la aplicación de los nuevos métodos de trabajo. Se describirán las técnicas para el estudio de métodos y la medición de los ritmos de trabajo de tareas definidas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estudio y métodos de trabajo en la industria de la confección',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Técnicas y diagramas de estudio de métodos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Diagrama de operaciones',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Diagrama de flujo del proceso',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Diagrama de recorrido',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Técnica de estudio de micromovimientos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estudio de tiempos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Sistema de tiempos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Técnicas de estudio de tiempos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Estudio y métodos de trabajo en la industria de la confección',
      referencia:
        'SENA. (2020). <em>Confección camiseta tipo polo Paso 4 Unir por hombros</em> (Video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rBrE6bikCRw',
    },
    {
      tema: 'Técnicas y diagramas de estudio de métodos',
      referencia:
        'Aguilar, L. (2019). <em>Métodos de trabajo – Confección</em> (Video). YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/jqca9UwfFSo',
    },
    {
      tema: 'Técnicas y diagramas de estudio de métodos',
      referencia:
        'Aguilar, L. (2019). <em>Métodos de trabajo - pegar mangas en un buso T-shirt</em> (Video). YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/jqca9UwfFSo',
    },
    {
      tema: 'Técnicas y diagramas de estudio de métodos',
      referencia:
        'Ingeniería Confección. (2008). <em>Confección en menos tiempo Dobladillar bota jean</em> (Video). YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/L76fT5Q1rqQ',
    },
    {
      tema: 'Técnicas y diagramas de estudio de métodos',
      referencia:
        'Ingeniería Confección. (2016). <em>Ejemplo de confección en menos tiempo Dobladillar bota jean</em> (Video). YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/L76fT5Q1rqQ',
    },
    {
      tema: 'Técnicas y diagramas de estudio de métodos',
      referencia:
        'Ingeniería Confección. (2010). <em>Ejemplos de cómo coser en menos tiempo</em> (Video). YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/1de6XsWMpHk',
    },
    {
      tema: 'Técnicas de estudio de tiempos',
      referencia:
        'Corona, L. (2013). <em>#Cronómetro mecánico MEYLAN</em> (Video). YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/fMsUtRLUf3Y',
    },
    {
      tema: 'Técnicas de estudio de tiempos',
      referencia:
        'Corona, L. (2017). <em>#Cronómetro Profesional, Extech 365535</em> (Video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hJUmtxN6Fvo',
    },
  ],
  glosario: [
    {
      termino: 'Diagrama analítico de proceso',
      significado:
        'muestra la trayectoria de un producto señalando al detalle, todos los hechos que se presentan durante su realización.',
    },
    {
      termino: 'Estandarización',
      significado:
        'es la forma en la que todas las personas pueden comparar datos, encontrar siempre los datos que se necesitan y tener certeza de uniformidad en la forma en la que se encontrarán.',
    },
    {
      termino: 'Estudio de métodos',
      significado:
        'examen crítico y sistemático del modo actual de llevar a cabo un trabajo, con el propósito de idear y aplicar métodos más sencillos y eficaces, enfocados en reducir costos.',
    },
    {
      termino: 'Layout',
      significado:
        'hace referencia a la disposición que tomarán las máquinas y secciones dentro de una instalación física como una planta o taller. Es un esquema que resume y señala la distribución y forma de los elementos dentro de un sitio. ',
    },
    {
      termino: 'Medición del trabajo',
      significado:
        'aplicación de técnicas para determinar el tiempo que invierte un trabajador calificado en llevar a cabo una tarea definida efectuándose según un método de ejecución preestablecido.',
    },
    {
      termino: 'MTM 1',
      significado:
        'el sistema MTM-1 es la base para el desarrollo de sistemas de bloques de movimientos agregados más altos. Transmite las características principales del método MTM y constituye la base para la comprensión y la aplicación de sistemas de bloques de movimientos adicionales.',
    },
    {
      termino: 'MTM 2',
      significado:
        'es un procedimiento que analiza cualquier operación manual o método en las secuencias de movimiento requeridas para realizarlo, y asigna a cada secuencia de movimiento un estándar de tiempo predeterminado que está determinado por los factores de influencia bajo los cuales se realiza.',
    },
    {
      termino: 'MTM 3',
      significado:
        'el último nivel de la Medición de Tiempos y Métodos se conoce por MTM-3. Este nivel no fue elaborado para reemplazar a MTM o a MTM-2, sino como un complemento de estos sistemas. El MTM-3 está destinado al caso de situaciones de trabajo donde, con objeto de ahorrar tiempo a expensas de algo de exactitud, es una mejor alternativa que el MTM o el MTM-2.',
    },
    {
      termino: 'Proceso',
      significado:
        'es un conjunto de actividades o eventos que se realizan o suceden bajo ciertas circunstancias en un determinado lapso de tiempo.',
    },
    {
      termino: 'Producción',
      significado:
        'es la capacidad de un factor productivo para crear determinados bienes en un periodo de tiempo determinado.',
    },
    {
      termino: 'Productividad',
      significado:
        'es el uso eficiente de los Recursos (Trabajo, Tierra, Materiales, Energía, Información, Tiempo) en la Producción de Bienes y Servicios.',
    },
    {
      termino: 'SAM',
      significado:
        'siglas en inglés para <em>STANDARD ALLOWED MINUTES</em>, conocido como tiempo estándar permitido. Su definición es el tiempo al que se han sumado las tolerancias propias de la operación.',
    },
    {
      termino: 'Suplemento',
      significado:
        'suplementos o tiempos suplementarios. Se considera el tiempo que se le concede al trabajador con el objetivo de compensar los retrasos, las demoras y los elementos contingentes que se presentan en la tarea o proceso.',
    },
    {
      termino: 'Tiempo estándar',
      significado:
        'el tiempo estándar se define como el tiempo que necesita un operador cualificado, preparado y entrenado, para ejecutar una operación, trabajando a una velocidad normal.',
    },
    {
      termino: 'TMU',
      significado:
        'la unidad en la cual se mide cada movimiento, según el MTM, es el TMU (<em>time measurement unit</em>): 1 TMU = 36 milisegundos; 1 hora = 100,000 TM; 1 TM = 0.036 segundos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Freivalds, A., & Niebel, B. W. (2014). <em>Ingeniería Industrial De Niebel: Métodos, Estándares Y Diseño Del Trabajo</em> (13a. Ed.). México D. F.: Mcgraw-Hill.',
    },
    {
      referencia:
        'García Criollo, R. (2005). <em>Estudio Del Trabajo; Ingeniería de Métodos</em> (2a. Ed.). México: Mcgraw-Hill Interamericana',
    },
    {
      referencia:
        'Kanawaty, G. (2014). <em>Introducción al estudio del trabajo</em>. Limusa.',
    },
    {
      referencia:
        'Meyers, F. (2000). <em>Estudios de tiempos y movimientos para la manufactura ágil</em>. Pearson Educación. mtmingenieros (2022). Tablas MTM.',
      link: 'http://mtmingenieros.com/recursos-mtm/descarga-de-recursos/',
    },
    {
      referencia:
        'Ospina, M. (2020). <em>El espacio del puesto de trabajo como factor principal en la industria de la confección</em>. Universidad Católica de Pereira. ',
      link: 'https://repositorio.ucp.edu.co/handle/10785/7108',
    },
    {
      referencia:
        'Palacios, L. (2016). <em>Ingeniería de métodos: movimientos y tiempos</em>. Ecoe Ediciones. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/114350?page=308',
    },
    {
      referencia:
        'Salazar, B. (2019). <em>Micromovimientos | Ingeniería Industrial Online</em>. Ingeniería Industrial Online. ',
      link:
        'https://www.ingenieriaindustrialonline.com/ingenieria-de-metodos/micromovimientos/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jenny Patricia Torres Sarmiento',
          cargo: 'Experto Temático',
          centro: 'Regional Antioquia - Centro Diseño, Confección y Moda',
        },
        {
          nombre: 'Carlos Parra ',
          cargo: 'Experto Temático',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Fernelis Mauricio Echeverri',
          cargo: 'Experto Temático',
          centro: 'Regional Antioquia - Centro Diseño, Confección y Moda',
        },
        {
          nombre: 'Adriana López López',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Correctora de estilo',
          centro:
            'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Adriana López',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro:
            'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrección de estilo',
          centro: 'Regional Tolima – Centro Agropecuario La Granja',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador web',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Validación de contenidos accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
