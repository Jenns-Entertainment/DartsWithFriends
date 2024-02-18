<template>
    <div class="floating-box">
        <table class="custom-table">
            <th class="header">
                {{ header }}
            </th>
            <tr>
                <td class="content">
                    {{ content }}
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
    },
}
</script>

<style scoped>
.floating-box {
    float: left;
    margin: 10px;
    padding: 10px;
    width: 250px; /* Change this value to set the width of the floating box */
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
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
    padding: 20px; /* Change this value to double the height of the content */
}
</style>
