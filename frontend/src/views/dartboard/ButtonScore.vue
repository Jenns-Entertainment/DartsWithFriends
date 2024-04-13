<template>
  <button
    class="count bg-gray-600 rounded" @click="clicked">
    {{ btn.label }}
  </button>
</template>

<script>

  export default {
      name: "ButtonScore",
      props: {
        btn: Object,
      },
      methods: {
          clicked (){
          this.$emit('get-score', this.btn.score)
        }
      },
      
  }
</script>

<style scoped>
.count{
  width: 100%;
  height: 100%;
}
</style>
