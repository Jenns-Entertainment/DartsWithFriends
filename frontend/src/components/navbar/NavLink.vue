<template>
  <button class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" @click="route">
    {{ name }}
</button>

</template>

<script>
export default {
  name: "NavLink",
  props: {
    link: String,
    name: String,
    params: Object,
  },
  methods:{
    route(){
      if(this.params != null){
        console.log(this.params)
      this.$router.push(({name: this.link , params: this.params}))
    }else{
      this.$router.push(({name: this.link }))
    }
    }
  }
}
</script>

<style scoped>

</style>
