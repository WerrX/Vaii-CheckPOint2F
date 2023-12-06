<script>
import '@fortawesome/fontawesome-free/css/all.css';
export default {
  name: "singUp"
}

</script>
<template>
  <div class="container text-center" >
    <div class="teloPrihlasovania">
      <div class="prihlasenie">
        <h1> Prihlásenie </h1>
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
            <label for="formGroupExampleInput" class="form-label" >Pouzivatelske meno alebo e-mail</label>
            <input type="text" class="form-control" id="formGroupExampleInput"  placeholder="Meno/e-mail">
          </div>
          <div class="mb-3pswd">
            <label for="formGroupExampleInput2" class="form-label">Heslo</label>
            <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="heslo">
            <span id="hidePswd"></span>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck">
            <label class="form-check-label" for="gridCheck">Zostat prihlaseny</label>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </form>
      </div>

      <div>
        <ul class="list-unstyled">
          <li>
            <a href="#">Zabudli ste heslo</a>
          </li>
          <li>
            <p>Nemate este ucet ? </p>
            <a href="#">Zaregistruj sa</a>
          </li>
        </ul>
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

.custom-icon {
  font-size: 40px;
  margin: 5px;
}
.prihlasneiIkona{
  margin: 20px 25% 20px;
}
.mb-3pswd  #hidePswd{
  position: absolute;
  right: 10px;
  width: 20px;
  height: 20px;
  background-color: rgba(0,0,0,0.15);
  border-radius: 20%;
  cursor: pointer;
}
.mb-3pswd  #hidePswd::before{
  content: '\f06e' ;
  font-family: FontAwesome;
}
</style>