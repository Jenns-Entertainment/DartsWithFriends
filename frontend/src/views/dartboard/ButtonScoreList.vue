<template>
    <div :key="btn.id" v-for="btn in btns">
        <ButtonScore :btn="btn" @get-score ="$emit('get-score', btn.score)"/>
    </div>

</template>

<script>
import ButtonScore from './ButtonScore.vue';

    export default {
    name: "ButtonScoreList",
    props: {
        btns: Array,
    },
    components: { ButtonScore },
    emits: ['get-score'],
}
</script>