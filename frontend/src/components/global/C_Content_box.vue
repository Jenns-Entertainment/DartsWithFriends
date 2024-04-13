<template>
    <div :style="{ width: `${width}px` }" class="floating-box">
        <table class="custom-table">
            <th class="header">
                {{ header }}
            </th>
            <tr>
                <td class="content">
                    {{ content }} 
                    <div v-show="editable" @click="fn_editContent()">
                        edit
                    </div>
                </td>
                    
           
                
            </tr>
        </table>
    </div>
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
    display: flex;
    flex-direction: column;
    align-items: center; /* Center the content horizontally */
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
