<script>
export default {
  name: "popUpOkno",
  props: {
    film:Object,

  },

  methods: {
    closeDiv() {
      this.$emit("close-this")
    }
  }
}
</script>

<template>
      <div class = "aa" >
        <div class="okno" style="width: 30%; height: 75%; background-color: black; position: relative; display: flex; flex-direction: column; justify-content: flex-start; align-items: center;">
          <div>
            <span @click="closeDiv" style="cursor: pointer; font-size: 30px; position: absolute; right: 0">&times;</span>
          </div>
          <img
              :src="'http://127.0.0.1:8000/' + film.foto"
              :alt="film.name"
              class="img-fluid"
              style="width: auto; height: 50%; max-width: 100%; margin: 0; padding-top: 20px;"
          />
          <div style="text-align: center;">
            <h3>{{ film.name }}</h3>
            <p>{{ film.description }}</p>
          </div>
        </div>
      </div>
</template>

<style scoped>
.aa {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  will-change: scroll-position;
  background-color: rgba(128, 128, 128, 0.5);
  align-items: center;
  height: 100vh;

}

.okno {
  width: 30%;
  height: 75%;
  background-color: black;
  text-align: center; /* Center text horizontally */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white; /* Set text color as needed */
}


</style>
