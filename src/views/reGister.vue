<template>
  <div class="container text-center">
    <div class="teloPrihlasovania">
      <div class="prihlasenie">
        <h1>Registracia</h1>
        <p>Vstup do raja filmov a serialov</p>
      </div>
      <div class="container text-center">
        <div class="row" id="iconsRow" style="padding-left: 15%">
        </div>
      </div>
      <div>
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


        <form class="prihlasneiIkona" @submit.prevent="checkPassword">
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">Pouzivatelske meno </label>
            <input v-model="meno" type="text" class="form-control" id="formGroupExampleInput" placeholder="Meno">
          </div>
          <div class="mb-3pswd">
            <label for="formGroupExampleInput2" class="form-label">Heslo</label>
            <div style="position: relative">
              <input v-model="heslo" :type="passwordFieldType" class="form-control" id="formGroupExampleInput2" placeholder="heslo">
              <button @click="togglePasswordVisibility" id="toggleBtn" style="position: absolute; right: 5px; top: 50%;transform: translateY(-50%)"></button>
            </div>

          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput3" class="form-label">Email</label>
            <input v-model="email" type="text" class="form-control" id="formGroupExampleInput3" placeholder="e-mail">
          </div>
          <div class="form-check">
            <input v-model="stayLoggedIn" class="form-check-input" type="checkbox" id="gridCheck">
            <label class="form-check-label" for="gridCheck">
              Zostat prihlaseny
            </label>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Registrovat sa</button>
          </div>
          <span id="hidePswd" style="color:red">{{ hidePswdMessage }}</span>
          <span id="message" style="color:red">{{ passwordMessage }}</span>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  name: "reGister",
  data() {
    return {
      meno: "",
      heslo: "",
      email: "",
      stayLoggedIn: false,
      passwordFieldType: "password",
      hidePswdMessage: "",
      passwordMessage: ""
    };
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    },
    checkPassword() {
      this.hidePswdMessage = "";
      this.passwordMessage = "";
      if (!this.meno.trim() || !this.email.trim()) {
        this.hidePswdMessage = "Nezadane Info";
        return;
      }
      if (!this.heslo.trim() || this.heslo.length < 8) {
        this.passwordMessage = "Heslo musí mať aspoň 8 znakov";
        return;
      }
      const contentP = /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{8,}$/;
      if (!contentP.test(this.heslo)) {
        this.passwordMessage = "Heslo musí obsahovať aspoň jedno číslo, jedno veľké písmeno a jeden špeciálny znak";
        return;
      }
      alert("boli ste prihlásený");
      this.meno = "";
      this.heslo = "";
      this.email = "";
    },
  }
}
</script>

<style scoped>
.teloPrihlasovania {
  min-width: 75%;
  background-color: #343a40;
  color: white;
  display: inline-block;
  padding: 20px;
}
#iconsRow {
  margin: 20px 25% 20px;
}
.custom-icon {
  font-size: 40px;
  margin: 5px;
}
.prihlasneiIkona {
  margin: 20px 25% 20px;
}

.mb-3pswd #toggleBtn::before {
  content: '\f06e';
  font-family: FontAwesome;
}
</style>
