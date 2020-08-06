<template>
  <div class="container mx-auto">
    <h2>Torta {{ cake.name }}</h2>

    <img :src="`/imgs/${cake.img[0]}`" alt="">
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'cake'
    ])
  }
}
</script>
