<template>
    <div style="width:50%">
        <img class="dartboard" style="display: flex; margin-top: 2%; align-content: center; margin-left: 60%;"
            src="@/assets/images/Dartboard.svg" alt="Blinde sollten nicht Darten" width="750" height="750"  />
    </div>


</template>



<script>
import MainHeader from "@/components/global/MainHeader.vue";
export default {
    name: 'Dartboard',
    components: {
        MainHeader,
    },
}

</script>
<style scoped>
#background {
    color: white;
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 100%;
    padding-top: 5%;
    padding-bottom: 0.1%;
    text-align: center
}
</style>



