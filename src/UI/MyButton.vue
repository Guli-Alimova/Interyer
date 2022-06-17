<template>
     <button class="my-button">
        <slot></slot> 
        <img src="@/assets/img/right-arrow-svgrepo-com.svg" class="img" alt="">
    </button>  
</template>

<script>


export default{
    name:"my-button"
}
</script>

<style>
    .button{
        display: flex;
        
    }
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
    .img{
        width: 20px;
        display: inline;
        margin-left:21px;
       
    }
</style>
