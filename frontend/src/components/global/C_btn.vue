<template>
    <button
      class="w-full text-center py-3 rounded text-white focus:outline-none my-1"
      :style="{background : color}"
    >
      {{text}}
    </button>
</template>

<script>
    export default {
        name: "CustomButton",
        props: {
          text: String,
          color: String,
        },
    }
</script>

<style scoped>

</style>
