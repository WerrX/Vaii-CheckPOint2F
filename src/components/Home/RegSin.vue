<script>
export default {
  name: "RegSin"
}
</script>

<template>

  <header id="headera" class="container-fluid d-flex justify-content-between align-items-center">
    <h6 class="headerVrch">Raj online filmov a seria uplne zadarmo</h6>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-auto" style="list-style: none; display: flex; gap: 10px; flex-direction: row; justify-content: flex-end;">
      <li class="nav-item">
        <router-link to="/register" style="color: #2c3e50; text-decoration: none; padding-left: 5px">Zaregistruj sa</router-link>
<!--        f06e-->
      </li>
      <li class="nav-item">
        <router-link to="/singUp" style="color: #2c3e50; text-decoration: none;">Prihlasit sa</router-link>

      </li>
    </ul>
  </header>
</template>

<style scoped>

</style>