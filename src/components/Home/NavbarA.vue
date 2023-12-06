<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark container-fluid" aria-label="Eighth navbar example" >
    <div class="kukajTo" style="display: flex; justify-content: space-between; align-items: center; ">
      <a class="KukajTo" href="#" style="padding-left: 150px; color: white; font-weight: bold">Kukaj to</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="navbar-links" style="display: flex; list-style: none; gap: 10px; width: max-content">
        <li class="nav-item" style="color: white">
          <router-link to="/" style="color: rgba(255, 255, 255, 0.55); text-decoration: none; ">Domov</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Filmy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Serialy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Rozpozerane</a>
        </li>
      </ul>
      <button type="submit" class="btn btn-primary" style="float: right">Search</button>
    </div>
  </nav>
</template>

<style scoped>
.kukajTo{
  width: max-content;
}

.navbar-nav li {
  float: right;
  color: white;
}
/*navigacuia 1  */
.navbar {
  padding: 20px 8% 20px;
  width: auto;
}
.nav-item{
  color: white;
  padding-left: 10px;
}
</style>