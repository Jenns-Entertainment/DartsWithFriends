<template>
   <div></div>
</template>

<script>
export default {
    name: "C_content_box",
    props: {
        header: String,
        content: String,
        editable:Boolean,
        width: {
            type: Number,
            default: 250, // Default width if not specified
        },
    },
    methods: {
        fn_editContent(){
            
        }
    }
}
</script>

<style scoped>
.floating-box {
    float: left;
    margin: 10px;
    padding: 10px;
    /*border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9; */
}

.custom-table {
    width: 100%;
    border-collapse: collapse;
}

.header {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
}

.content {
    background-color: #666666;
    color: #fff;
    text-align: center;
    padding: 10px;
}
</style>
