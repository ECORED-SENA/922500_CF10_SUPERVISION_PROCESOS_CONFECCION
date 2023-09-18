<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Estudio y métodos de trabajo en la industria de la confección
      

    .row.fondo-tema1.align-items-center.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
    
          .row.justify-content-center.mb-3
            .col-lg-8.mb-4(data-aos="fade-right")
              .cajon.color-secundario.h-100.p-4.p-md-5.mb-4
                p.mb-0 Uno de los propósitos del sistema de producción de una gran organización se da a través del concepto de  
                  em.t-green.fw-bold Lean Manufacturing
                  | , qué es la eliminación de desperdicios o mudas, propósito que persiguen todos los días los supervisores de plantas de confección, en busca de reducir tiempos y como consecuencia el reducir el costo de la prenda. Estos desperdicios se visibilizan a través de la puesta en marcha de un proyecto de estudio de trabajo que permita a través de distintas técnicas visibilizar lo que se debe mejorar dentro de un proceso productivo.
            .col-lg-4.col-md-9.mb-4.ps-md-0(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema1/img.png' alt='')

          p.mb-4(data-aos="fade") El estudio del trabajo es un qué hacer sistemático, donde se tiene como primera premisa, que todo proceso es susceptible de mejora, por lo que siempre un supervisor o analista de métodos encontrará la forma de seguir mejorando. El estudio lo componen los métodos que se basan en determinar la mejor forma de producir y la medición del tiempo que busca establecer cuánto tiempo debería consumirse por unidad producida, tal como se puede apreciar a continuación.
          
          .row.justify-content-center.align-items-center.tema1-estudio.mb-3
            .col-lg-4.pe-md-0.mb-4
              .tarjeta.bg-4.box-shadow.p-4.pe-md-5
                p De acuerdo a Kanawaty (2014), el estudio de métodos se ha convertido en una rama de la ingeniería especializada en validar minuciosamente la forma de ejecutar los procesos, se ha basado en establecer el detalle de cómo se realiza una operación, desglosada en movimientos eficientes en la industria de la confección.
                p.mb-0 Debido a la multiplicidad de movimientos, maquinaria utilizada y productos a realizar se han dedicado bastantes esfuerzos por parte de la academia y el sector productivo por complementar esta rama de la ingeniería. 
            .col-lg-2.col-md-8.img-estudio.px-md-0.mb-4
              img.d-none.d-lg-block(src='@/assets/curso/temas/tema1/estudio.svg' alt='La sumatoria del estudio de métodos y de tiempos da como resultado un correcto estudio de trabajo.')
              img.d-lg-none.d-block(src='@/assets/curso/temas/tema1/estudio-mobile.svg' alt='La sumatoria del estudio de métodos y de tiempos da como resultado un correcto estudio de trabajo.')
            .col-lg-4.col-md-8.ps-md-0.mb-4
              img(src='@/assets/curso/temas/tema1/img.svg' alt='')

          p.mb-4(data-aos="fade") Los 
            b.t-orange estudios de métodos 
            | pueden ahorrar un porcentaje mayor de costos que cualquier otra práctica que se pueda hacer en una planta de confección, ya que permite analizar el proceso y establecer de manera general las actividades que no agregan valor al producto y enfocar sus esfuerzos a eliminarlas o mitigarlas según sea el caso.

          .row.justify-content-center
            .col-lg-4.col-md-8.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/img2.png' alt='')
            .col-lg-8.mb-4(data-aos="fade-left")
              .bloque-texto-c.bg-gray.p-4.px-md-5.h-100
                i.fas.fa-quote-right.mb-3
                h4.mb-2 Estudiar el método ayuda a diseñar la forma correcta de realizar un determinado trabajo u operación, y de esta forma estandarizarlo a través de la capacitación. Como consecuencia se obtendrá una reducción de tiempos y costos. Sin embargo, este no es solo el objetivo del estudio de métodos, muchas veces tiene que ver con una estrategia de calidad, ya que la estandarización de métodos permite reducir la posibilidad de errores o defectos del producto durante el proceso productivo. 
                h4 (Salazar, 2019)


    p.mb-4(data-aos="fade") El estudio de métodos se relaciona específicamente con los conceptos de productividad, eficiencia y eficacia. El siguiente recurso amplía esta terminología.  

    .row.fondo2-tema1.align-items-center.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          TabsB.color-acento-botones.tema1.mb-5.px-md-0
            .fondo-tema1-tabs.p-4.p-md-5(titulo="Productividad" :icono="require('@/assets/curso/temas/tema1/ico1.svg')")
              .row.justify-content-center
                .col-lg-7.mb-4.mb-md-0
                  h4 Productividad
                  p Se refiere al grado de rendimiento con que se emplean los recursos disponibles para alcanzar los objetivos determinados, también como el uso eficiente de los recursos (trabajo, tierra, materiales, energía, información, tiempo) en la producción de bienes y servicios. La importancia de la productividad desde el punto de vista económico radica principalmente en que entre más productivo sea el proceso, más rentable será. 
                  p Un operario de confección trabaja 8 horas diario en el turno y produce 200 camisetas en la operación cierre de costados. Suponga que después de realizar un estudio de métodos y realizar las mejoras, él puede realizar 230 unidades en el mismo turno y con la misma máquina, su productividad calculada en función del número de prendas habrá aumentado un 15 %.               
                .col-lg-5.col-md-8
                  img(src='@/assets/curso/temas/tema1/tab1.png', alt='')
            .fondo-tema1-tabs.p-4.p-md-5(titulo="Eficiencia" :icono="require('@/assets/curso/temas/tema1/ico2.svg')")
              .row.justify-content-center
                .col-lg-7.mb-4.mb-md-0
                  h4 Eficiencia
                  p La eficiencia se logra cuando se obtiene un resultado esperado con el mínimo de insumos. Es decir, se genera cantidad y calidad y se incrementa la productividad. En un ejemplo sencillo se puede indicar que se fue eficiente si se produjeron 200 sacos en menos tiempo y con la calidad esperada. (García, 2005).
                  p Otra definición de eficiancia se refiere a que es la relación entre los resultados logrados y los recursos empleados. Se incrementa la eficiencia si se optimizan los recursos y se reducen los tiempos muertos por paros de máquinas, falta de materia prima, retrasos, entre otros.
                  img.mx-auto.w-320(src='@/assets/curso/temas/tema1/form1.svg', alt='Fórmula de medición: la eficiencia es igual a la capacidad usada sobre la capacidad disponible.')
                .col-lg-5.col-md-8
                  img(src='@/assets/curso/temas/tema1/tab2.png', alt='')
            .fondo-tema1-tabs.p-4.p-md-5(titulo="Eficacia" :icono="require('@/assets/curso/temas/tema1/ico3.svg')")
              .row.justify-content-center
                .col-lg-7.mb-4.mb-md-0
                  h4 Eficacia
                  p La eficacia implica la obtención de los resultados deseados y puede ser un reflejo de cantidades, calidad percibida o ambos. En este caso se puede indicar, como ejemplo, que se produjeron 200 sacos en el tiempo programado y con la calidad esperada. (García, 2005).
                  p Otra definición menciona que la eficacia es el grado con el cual las actividades planeadas son realizadas y los resultados previstos son los logrados. Se incrementa si la producción real se maximiza. 
                  p La eficacia puede cuantificarse en función de la producción real y la producción programada.
                  img.mx-auto.w-320(src='@/assets/curso/temas/tema1/form2.svg', alt='Fórmula de medición: la eficacia es igual a la producción real sobre la producción programada.')
                .col-lg-5.col-md-8
                  img(src='@/assets/curso/temas/tema1/tab3.png', alt='')
          
          .col-lg-10(data-aos="fade-down")  
            .tarjeta.bg-color-secundario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2.px-lg-4.px-md-3
                  img.px-lg-4(src="@/assets/curso/temas/tema1/pdf.svg")
                .col.ps-md-0
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Oportunidades de ahorro
                      p.mb-0 Visualice el siguiente gráfico para comprender mejor en qué consiste las oportunidades de ahorro.
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/Oportunidades_de_ahorro.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download
    
    p.mb-4(data-aos="fade") Según García (2005) la determinación de las etapas para realizar un estudio de métodos es el resultado de muchos intentos en el ejercicio de la ingeniería, por lo tanto, es necesaria su revisión antes de realizar un ejercicio de estandarización que prometa una mejora, ya que omitir cualquier etapa puede significar reprocesos o pérdida de información importante para el propósito del estudio. 
      b.t-red Las etapas de un estudio de métodos, de acuerdo con García (2005) son:

    LineaTiempoD.color-primario
      .row.justify-content-center(numero="1" titulo="Seleccionar el trabajo que debe mejorarse")
        .col-lg-7.mb-4.mb-md-0
          p En una planta de confección no es posible realizar mejoras en todos los procesos al mismo tiempo, es por ello que se necesita determinar el proceso o actividad a mejorar, se debe concentrar la atención en las operaciones esenciales considerando los puntos de vista humano, económico y funcional. 
          p #[b Humano:] se seleccionan aquellas actividades que generan cansancio, dificultad al realizarlas, que tengan como precedente mayor riesgo de accidentes, o mayor tendencia a generar mala calidad. 
          p #[b Económico:] se selecciona trabajos o actividades que generan elevados costos debido al uso excesivo de mano de obra, ya que una mejora en este aspecto representa un mayor impacto para el costo total de la prenda. 
          p #[b Funcional:] se seleccionan tareas que representen una restricción o cuello de botella para el proceso.      
        .col-lg-5.col-md-10
          img(src='@/assets/curso/temas/tema1/linea1.png', alt='')
      .row.justify-content-center(numero="2" titulo="Registrar los aspectos detallados del trabajo")
        .col-lg-7.mb-4.mb-md-0
          p Para optimizar un proceso debemos conocer al detalle los por menores de la tarea, es por ello que se hace necesario registrar lo que se observa directamente en el sitio de trabajo, aspectos como movimientos, actividades, maquinaria utilizada, quién lo realiza, con qué lo realiza. entre otros aspectos. que es importante registrar. 
          p Esto se hace mediante técnicas e instrumentos de obtención de información clara y estandarizada que son los “gráficos” y “diagramas”. Generalmente los instrumentos utilizados se usan para el registro del diagnóstico inicial del proceso y también para validar en cambio en las mejoras propuestas, es por esto que dentro de los formatos se debe describir si es el estado actual o futuro del proceso. 
        .col-lg-5.col-md-10
          img(src='@/assets/curso/temas/tema1/linea2.png', alt='')
      .row.justify-content-center(numero="3" titulo="Analizar el trabajo")
        .col-lg-7.mb-4.mb-md-0
          p Aquí se hace necesario preguntar al operario, o los que participan del proceso, una serie de interrogantes que permiten validar los por menores de la actividad. Muchas veces al tener este diálogo se pueden llegar a soluciones propuestas desde las partes interesadas más importantes del proceso; es por esto que se debe tener una mentalidad abierta y receptiva a las posibilidades de cambio. 
          ul.lista-ul--color.color-primario.ps-4
            li.mb-2 
              i.fas.fa-tshirt
              | ¿Dónde se hace? Se refiere al lugar donde se realiza el trabajo.
            li.mb-2 
              i.fas.fa-tshirt
              | ¿Cuándo se hace? Se refiere al orden y el tiempo en que se efectúa el trabajo. 
            li.mb-2 
              i.fas.fa-tshirt
              | ¿Quién lo hace? Se refiere a las personas que ejecuta el trabajo. 
            li 
              i.fas.fa-tshirt
              | ¿Cómo se hace? Se refiere a la forma de realizar el trabajo. 
        .col-lg-5.col-md-10
          img(src='@/assets/curso/temas/tema1/linea3.png', alt='')
      .row.justify-content-center(numero="4" titulo="Desarrollar una versión mejorada del método")
        .col-lg-7.mb-4.mb-md-0
          p En esta etapa se puede considerar las respuestas a las preguntas formuladas en el análisis del trabajo; a partir de esas respuestas es que se procede a mejorar la versión actual de la ejecución de la tarea o proceso, a través de la eliminación de aquellos detalles del trabajo que no justifican la manera en que se está realizando, actividades o movimientos ineficaces. 
          p De no poder eliminarse, se debe buscar la forma de simplificarse para que se haga de una manera más fácil por el trabajador. Si no se llega a ninguna de las circunstancias anteriores, se puede proceder a cambiar algunos detalles para que se pueda realizar la tarea de una manera más lógica.
        .col-lg-5.col-md-10
          img(src='@/assets/curso/temas/tema1/linea4.png', alt='')
      .row.justify-content-center(numero="5" titulo="Capacitar al equipo en la versión mejorada")
        .col-lg-7.mb-4.mb-md-0
          p Una vez propuesta la versión mejorada del método de trabajo, se procede a la capacitación del personal para mostrar la forma organizada y estandarizada en la que se debe realizar ahora el proceso en cuestión.  
        .col-lg-5.col-md-10
          img(src='@/assets/curso/temas/tema1/linea5.png', alt='')
      .row.justify-content-center(numero="6" titulo="Aplicar la versión mejorada del método de trabajo")
        .col-lg-7.mb-4.mb-md-0
          p Después de hacer seguir los pasos anteriores se debe planificar, aplicar y controlar la versión mejorada del método de trabajo para que perdure en el tiempo y no se vuelva a la versión del método anterior. Esto puede ser lo más complejo ya que se requiere de la persistencia y disciplina de los involucrados en el proceso de cambio.  
          p Todos los pasos se deben aplicar, saltarse alguno significa que no se obtendrá el mejor resultado esperado. Así mismo se deberá pensar en el nuevo trabajo a intervenir, ya que es un método sistemático.
        .col-lg-5.col-md-10
          img(src='@/assets/curso/temas/tema1/linea6.png', alt='')




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
