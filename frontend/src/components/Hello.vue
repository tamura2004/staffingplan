<template lang="pug">
.container
  .row
    .col-3
      .card
        .card-header.bg-inverse.text-white: h5.mb-0: strong 山田太郎
        .card-block
          h5.mb-0
            icon(name="caret-left")
            | &nbsp;
            | 2017年3月
            | &nbsp;
            icon(name="caret-right")
        table.table
          tbody
            tr
              td: strong 合計
              td 1.20
            tr.table-danger
              td: strong 過不足
              td +0.20

    .col-9
      table.table
        thead.bg-inverse.text-white
          tr
            th 案件管理番号
            th 案件名
            th 稼働予定（人月）
            th 操作
        tbody
          tr(v-for="i in 4")
            td 2611630001-00-a
            td 【渉外用タブレット】地図アプリの導入(RB/SR/KO)
            td: input.form-control.form-control-sm(type="text")
            td: button.btn.btn-danger.btn-sm(type="button"): strong 削除
      hr
      button.btn.btn-primary(type="button"): strong 案件追加
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
