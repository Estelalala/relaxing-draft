<template>
    <div class="wrapper">
        <div class="innerBox">
            <h1>Page 4</h1>
            <h3>抽一位幸运观众替我写作业</h3>
            <h2 v-show="isOn">You!</h2>
            <button @click="isOn=!isOn">开始</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isOn: false
            }
        }
    }
</script>

<style scoped>
    button {
        padding: 10px 20px;
        border-radius: 5px;
    }
    button:hover {
        background-color: cornsilk;
    }
</style>