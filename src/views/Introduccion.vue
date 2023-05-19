<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .row.fondo-intro.align-items-center.pt-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-3.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/temas/intro/img.svg' alt='Imagen decorativa')
          .col-md-9.mb-4(data-aos="fade-left")
            p 
              b.t-red Los sectores textil y confección son de los más importantes en la economía del país, debido a que generan una gran cantidad de empleos. 
              | Así mismo es uno de los más competitivos, debido a la facilidad con que ingresan productos del extranjero por falta de restricciones arancelarias, lo que hace que en el mercado exista una gran oferta de productos con costoso muy por debajo de lo que ofrece la industria local, lo que ha llevado a los empresarios a asumir retos productivos y de calidad a través del mejoramiento y estandarización de métodos de trabajo y como consecuencia, disminución de tiempos; sumado a esto, el reto también tiene que ver con fortalecer el recurso humano que dirige y acompaña el proceso productivo. En el siguiente video se mostrará en qué consiste esta estandarización de los métodos de trabajo en el que el estudio de los tiempos cumple un factor importante.

          figure(data-aos="fade-down")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
