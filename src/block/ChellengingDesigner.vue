<template>
<div class="pb-[140px]">
  <div class="container">
    <div class="flex">
        <div>
            <h3 class="font-['DM Serif Display']   
            text-[50px] 
            text-normal leading-[65px]  
            tracking-[.21px] 
            text-left 
            text-[#292F36]
            w-[450px]">
            We Tackle The Most Challenging Designs
            </h3>
            <div class="font-['Jost'] ;
                text-[22px]
                text-normal
                leading-[33px] 
                tracking-[.21px]
                text-left
                text-[#4D5053]
                mt-[42px] mb-[46px]
                ">
                <p class="w-[531px]">The world needs innovators and problem solvers who turn 
                challenges into greater opportunities. We have</p>
                <p class="w-[492px]">an insatiable curiosity about transformative trends challenging the status.</p> 
            </div>
           <div class="flex mb-[50px]">
            <button class="p-[30px] bg-[#F4F0EC] rounded-[100px]">
                <img src="@/assets/img/call-svgrepo-com.svg" class="w-[32px]" alt="phone">
            </button>
            
            <div class="ml-[20px]">
            <span class="font-['Jost'] 
                text-[24px] 
                text-normal 
                leading-[36px] 
                tracking-[.21px];
                text-[left]
                text-[#4D5053]
                block"
                >012345678</span>
            <span  class="font-['Jost'] 
                text-[22px] 
                text-normal 
                leading-[33px] 
                tracking-[.21px];
                text-[left]
                text-[#4D5053]">Call Us Anytime</span>   
            </div>
            </div>   
            <my-button>Get Free Estimate</my-button>
        </div>
         <div class="ml-[77px]"><img src='@/assets/img/bgimg.png' alt=""></div>   
    </div>
   
</div>  
</div>

    
</template>

<script>
import MyButton from '@/UI/MyButton.vue'


export default {
    components:{
        MyButton
    }
}
 

</script>

<style scoped>

</style>