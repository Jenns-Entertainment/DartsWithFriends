<template>
  <label for="{{ name }}" v-if="this.label!=null">{{ label }}</label>
  <input
    :disabled="disabled"
    :type="type"
    class="c_textfield"
    :name="name"
    :required ="required"
    :placeholder = "placeholder" 
    v-model="value"
    :id="id"
    :autofocus="autofocus"
    
    />
</template>

<script>
    export default {
        name: "c_txtField",
        props: {
        id:               String,
        type:             String,
        name:             String,
        placeholder:      String,
        required:         Boolean,
        value:            String,
        label:            String,
        disabled:       Boolean,
        autofocus: Boolean,
      },
    }
</script>

<style scoped>

</style>
