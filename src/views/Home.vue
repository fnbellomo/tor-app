<template>
  <div class="container mx-auto">
    <h1 class="text-4xl font-bold font-mono">TortApp</h1>

    <div
      v-for="(tag, index) in tt"
      :key="index"
      :class="tag.selected ? 'bg-purple-500 text-white' : 'bg-gray-400 text-black'"
      class="inline-flex m-4 px-4 py-2 rounded-lg cursor-pointer"
      @click="() => toggleTag(index)"
    >
      <span>{{ tag.name }}</span>
    </div>

    <div class="grid grid-cols-4">
      <router-link
        v-for="(cake, index) in cakes"
        :key="index"
        :to="`/torta/${cake.name}`"
        class="p-4 mx-2 border shadow-xl"
        @click.native="() => setCake(cake)"
      >
        <img :src="`/imgs/${cake.img[0]}`" alt="some alt">
        <h2 class="text-2xl font-bold font-mono">{{ cake.name}}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import data from '@/data.json'

export default {
  name: 'Home',
  computed: {
    ...mapState([
      'options',
      'tags'
    ])
  },
  data () {
    return {
      tt: [],
      cakes: []
    }
  },
  mounted () {
    this.setOptions(data)
    this.tt = this.tags.map(t => ({ name: t, selected: true }))
  },
  watch: {
    tt: {
      handler () {
        const selected = this.tt
          .filter(t => t.selected)
          .map(t => t.name)

        this.cakes = this.options.filter(cake => {
          return cake.tags
            .map(t => selected.includes(t))
            .every(Boolean)
        })
      },
      deep: true
    }
  },
  methods: {
    ...mapMutations([
      'setCake'
    ]),
    ...mapActions([
      'setOptions'
    ]),
    toggleTag (index) {
      this.tt[index].selected = !this.tt[index].selected
    }
  }
}
</script>
