<template>
     <button class="font-normal font-['Jost'] text-lg leading-7 text-[#fff] p-5 bg-[#292F36] rounded-2xl">
        <!-- padding 22 px edi remda bu qancha boladi border radius 18px remda qancha boladi   -->
        <slot></slot> 
        <img src="@/assets/img/right-arrow-svgrepo-com.svg" class="w-5 inline ml-[21px]" alt="">
    </button>  
</template>

<script>


export default{
    name:"my-button"
}
</script>

<style>

</style>
