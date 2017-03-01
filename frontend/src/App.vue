<template lang="pug">
#app
  link(
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css",
    rel="stylesheet",
    integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ",
    crossorigin="anonymous"
  )

  nav.navbar.navbar-toggleable-lg.navbar-inverse.bg-inverse.mb-3
    .navbar-brand 勤務予定
    .navbar-nav
      router-link.nav-item.nav-link(to="/") 担当別
      .nav-item.nav-link 案件別
      .nav-item.nav-link 月別
    form.form-inline.ml-auto
      input.form-control(type="text", placeholder="検索")

  router-view

</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
#app {
  font-family: "游ゴシック", YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.form-control {
  width: 150px;
}

</style>
