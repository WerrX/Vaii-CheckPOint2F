<script>
export default {
  name: "FooterHome"
}
</script>

<template>
  <footer>
    <div class="container text-center">
      <div class="row">
        <div class="col-md-3">
          <img src="../../Images/logos/kukajto.png" alt="..." class="imageSlide" style="max-height: 50px; max-width: 50px">
        </div>
        <div class="col">
          <div class="row row-cols-4">
            <div class="col">
              <router-link to="/help" style="color: white; text-decoration: none">Pomoc</router-link>
            </div>
            <div class="col"><a class="footer-link" href="#">Filmy</a></div>
            <div class="col"><a class="footer-link" href="#">Filmy s dabuingom</a></div>
            <div class="col"><a class="footer-link" href="#">Serial s dabingom</a></div>

            <div class="col"><a class="footer-link" href="#">Podmienky a zasady</a></div>
            <div class="col"><a class="footer-link" href="#">Serialy</a></div>
            <div class="col"><a class="footer-link" href="#">Rozpozerane</a></div>
            <div class="col"><a class="footer-link" href="#">Vyhladavanie</a></div>

            <div class="col"><a class="footer-link" href="#">DMCA</a></div>
            <div class="col"><a class="footer-link" href="#">Najnovsie filmy</a></div>
            <div class="col"><a class="footer-link" href="#">Filmy2020</a></div>
            <div class="col"><a class="footer-link" href="#">Filmy 2019</a></div>

            <div class="col"><a class="footer-link" href="#">KONTAKT</a></div>
            <div class="col"><a class="footer-link" href="#">Najnovsie Serialy</a></div>
            <div class="col"><a class="footer-link" href="#">Serial 2020</a></div>
            <div class="col"><a class="footer-link" href="#">Serial 2019</a></div>
          </div>
        </div>
      </div>
    </div>
  </footer>

</template>

<style scoped>
footer {
  background-color: #333;
  color: white;
  padding: 20px 0;
  margin-top: auto;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer-link {
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-family: Arial;
}
.imageSlide {
  max-height: 50px;
  max-width: 50px;
}
</style>