
<script>
import axios from "axios";
import popUpOkno from "@/components/Home/popUpOkno.vue";

export default {
  name: "HomeView",
  components: {popUpOkno},
  data() {
    return {
      films: [],
      visible: false,
      filmDetail: null,
    };
  },
  created() {
    axios
        .get("http://127.0.0.1:8000/films/")
        .then((response) => {
          // Update films data
          this.films = response.data;

          // Optionally log the response data for debugging
          console.log(response.data);
        })
        .catch((error) => {
          // Handle errors
          console.error("Neni:", error);
        });
  },

  methods: {
    aloha(film) {
      this.filmDetail = film;
      this.visible = true;
    },
    closeDiv() {
      this.visible = false;
    },
  }
};


</script>

<template>
  <div class="container bg-dark" style="margin-top: 20px">
    <div class="container" style="">
      <div class="row justify-content-center">
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../Images/FilmFoto/johny.jpg" alt="..." class="imageSlide" >
              <div class="carousel-caption d-none d-md-block">
                <h3>Johny English</h3>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../Images/FilmFoto/witcher.jpg" alt="..." class="imageSlide" >
              <div class="carousel-caption d-none d-md-block">
                <h3>Witcher</h3>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../Images/FilmFoto/johnWick4.jpg" alt="..." class="imageSlide "  >
              <div class="carousel-caption d-none d-md-block">
                <h3>John Wick 4</h3>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="../Images/FilmFoto/ahsoka.jpg" alt="..." class="imageSlide" >
              <div class="carousel-caption d-none d-md-block ">
                <h3>Ahsoka</h3>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>


  <div class="container-2nacv " id="nav2">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
      <div class="Netflix d-flex justify-content-between">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="nav-bar2">
          <li class="nav-item">
            <a class="nav-link" href="#">Filmy</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Serialy</a>
          </li>
        </ul>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="nav-bar2.2" >
          <li class="nav-item">
            <a class="nav-link" href="#">Vsetko</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Titulky</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Dabing</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>



  <div class="container text-center">
    <ul class="list-unstyled d-flex flex-wrap">
      <li v-for="(film, index) in films" :key="index" class="col-2">
        <a href="#">
          <img
              :src="'http://127.0.0.1:8000/' + film.foto"
              :alt="film.name"
              class="img-fluid"
              style="max-width: 200px; height: auto; padding: 5px;"
              @click = "aloha(film)"
          />
        </a>
      </li>
    </ul>
  </div>
<popUpOkno v-if="visible" :film="filmDetail" @close-this="closeDiv" style="height: 100%; width: 100%;"> </popUpOkno>

</template>

<style scoped>

.container{
  margin: 0 auto;
}

/*stlye menime iba v nasom komponente a niako inak nemeni vzhlad aplikacie*/
/* Tu môžete pridať špecifické štýly pre vašu novú komponentu */
body {

  background-size: cover;
}

.nav-item {
  padding-left: 10px;
}

/*navigacia1 end*/

/* inline prihlsenie a reg*/
#headera .nav-item {
  display: inline-block;
  margin-right: 10px;
}
/*menu hlavne preklikavanie filmov */
.carousel-inner {
  width: 70%;
  margin: 0 auto;
}
/*text v slide obrazkoch*/
.carousel-caption {
  position: absolute;
  left: 0;
  top: 50%; /* Adjust the top value as needed */
  transform: translateY(-50%);
  text-align: left;
}
.carousel-caption h5, .carousel-caption p {
  text-align: left; /* Align text to the left within the caption */
}
.imageSlide{
  float: right;
  height: 500px;
}

</style>