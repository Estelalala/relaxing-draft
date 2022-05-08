<template>
    <div class="wrapper">
        <div class="innerBox">
            <img src="../assets/reveal-white-text.svg" alt="" class="logo">
            <h4>THE HTML PRESENTATION FRAMEWORK</h4>
            <p>
                <small>
                    Created by 
                    <a href="">Hakim El Hattab</a>
                     and 
                    <a href="">contributors</a>
                </small>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .slideArea {
        background-color: #1a1626;
        text-align: center center;
        position: relative;
    }
    .wrapper{
        width: 100%;
        height: 65vh;
        max-height: 900px;
        background-color: #1a1626;
        color: #fff;
        font-family: Source Sans Pro,Helvetica,sans-serif;
        margin: auto;
        text-align: center;
        vertical-align: middle;
    }
    .innerBox {
        margin: auto;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    .innerBox small {
        display: inline-block;
        line-height: 1.2em;
    }
    .innerBox a {
        color: rgb(237,100,166);
        text-decoration: none;
    }
    .logo {
        height: 85px;
        margin: 0 auto 2rem auto;
        background: transparent;
    }
    h4 {
        font-weight: 600;
    }
    .ctrlArea {
        position: absolute;
        right: 12px;
        bottom: 12px;
    }
    .control {
        padding: 0;
        background-color: transparent;
        border: 0;
        outline: 0;
        color: rgb(237,100,166);
    }
    .arrow-left {
        position: absolute;
        right: 100px;
        bottom: 63px;
    }
    .arrow-right {
        transform: rotate(180deg);
    }
    .arrow::before, .arrow::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 2em;
        height: 0.4em;
        border-radius: 0.25em;
        background-color: currentColor;
        transition: all .15s ease,background-color .8s ease;
        transform-origin: 0.2em 50%;
        will-change: transform;
    }
    .arrow::before {
        transform: translateX(0.5em) translateY(1.55em) rotate(45deg);
    }
    .arrow::after {
        transform: translateX(0.5em) translateY(1.55em) rotate(-45deg);
    }
</style>