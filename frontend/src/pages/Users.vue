<template lang="pug">
.container
  .row
    .col-2
      .card.card-outline-primary.mb-3
        .card-block.p-2
          h5.mb-0 アサイン状況
      .card.card-inverse.card-danger.mb-3
        .card-block.p-2
          h5.text-white.mb-0 20％未満
          h5.text-white.mb-0 または120％超
      .card.card-inverse.card-warning.mb-3
        .card-block.p-2
          h5.text-white.mb-0 20％〜50％
      .card.card-inverse.card-info.mb-3
        .card-block.p-2
          h5.text-white.mb-0 50％〜80％
      .card.card-inverse.card-success.mb-3
        .card-block.p-2
          h5.text-white.mb-0 80%〜100％
      .card.card-inverse.card-primary.mb-3
        .card-block.p-2
          h5.text-white.mb-0 100%〜120％

    .col-10
      .row
        .col-2(v-for="i in 8")
          .card.card-inverse.card-danger.mb-3
            .card-block.p-2
              p.mb-0 042073
              h5.mb-1 山田太郎
              p.mb-0 ▲0.31
        .col-2(v-for="i in 8")
          .card.card-inverse.card-warning.mb-3
            .card-block.p-2
              h5 山田太郎
              p.mb-0 ▲0.31
        .col-2(v-for="i in 8")
          .card.card-inverse.card-info.mb-3
            .card-block.p-2
              h5 山田太郎
              p.mb-0 ▲0.31
        .col-2(v-for="i in 8")
          .card.card-inverse.card-success.mb-3
            .card-block.p-2
              h5 山田太郎
              p.mb-0 ▲0.31
        .col-2(v-for="i in 8")
          .card.card-inverse.card-primary.mb-3
            .card-block.p-2
              h5 山田太郎
              p.mb-0 ▲0.31


</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Users',
  props: ['user_id'],
  computed: mapGetters(['users'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
body
  background-color black

h5
  font-weight bold
  text-align center
  font-size 16px

p
  text-align center
  font-size 12px

.card-inverse
  h5, p
    color white

.card
  opacity 0.9
</style>
