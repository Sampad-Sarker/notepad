<template>
  <button @click="$store.commit('filterNote','')">All ({{count}})</button>
        <button
          v-for="color in noteCountByColor"
          :key="color.color"

          :style="{'background-color': color.color}"
          @click="$store.commit('filterNote',color.color)"
        >
            {{color.noteCount}}
        </button>
        <!-- <button style="background-color: #ffe5d9">0</button>
        <button style="background-color: #fbfaf0">0</button>
        <button style="background-color: #ffe9ee">0</button>
        <button style="background-color: #ffdde4">1</button>
        <button style="background-color: #ffffff">0</button> -->
</template>

<script>
import { mapGetters } from "vuex"
export default {
    name:'Filter',
    computed:{
      ...mapGetters(['noteCountByColor','count']),

    }

}
</script>

<style>

</style>