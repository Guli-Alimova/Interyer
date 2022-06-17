<template>
    <button class="my-button">
        <slot></slot>
    </button>
</template>

<script>


export default{
    name:"my-button"
}
</script>

<style>
    .my-button{
    font-family: Jost;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0.7200000286102295px;
    text-align: left;
    color:#fff;
    padding:22px;
    background-color: #292F36;
    border-radius:18px;
    }
</style>
