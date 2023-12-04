<script>
export default {
  name: "reGister"
}
</script>

<template>
  <div class="container text-center" >
    <div class="teloPrihlasovania">
      <div class="prihlasenie">
        <h1> Registracia </h1>
        <p> Vstup do raja filmov a serialov</p>
      </div>

      <div class="container text-center">
        <div class="row" id="iconsRow" style="padding-left: 15%">
          <div class="col-6 col-sm-3">
            <a href="#">
              <i class="bi bi-google custom-icon"></i>
            </a>
          </div>
          <div class="col-6 col-sm-3">
            <a href="#">
              <i class="bi bi-facebook custom-icon"></i>
            </a>
          </div>

          <div class="w-100"></div>

          <div class="col-6 col-sm-3">
            <a href="#">
              <i class="bi bi-twitch custom-icon"></i>
            </a>
          </div>
          <div class="col-6 col-sm-3">
            <a href="#">
              <i class="bi bi-twitter custom-icon"></i>
            </a>
          </div>
        </div>
      </div>

      <div>
        <form class="prihlasneiIkona">
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label" >Pouzivatelske meno </label>
            <input type="text" class="form-control" id="formGroupExampleInput"  placeholder="Meno">
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Heslo</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="heslo">
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label" >Email</label>
            <input type="text" class="form-control" id="formGroupExampleInput"  placeholder="e-mail">
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck">
            <label class="form-check-label" for="gridCheck">
              Zostat prihlaseny
            </label>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Registrovat sa</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.teloPrihlasovania{
  min-width: 75%;
  background-color:#343a40;
  color: white;
  display: inline-block;
  padding: 20px;
}
#iconsRow{
  margin: 20px 25% 20px;
}
</style>