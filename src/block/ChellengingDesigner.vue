<template>
<div class="pb-[140px]">
  <div class="container">
    <div class="flex">
        <div>
            <h3 class="font-['DM Serif Display']   
            text-[50px] 
            font-normal leading-[65px]  
            tracking-[.21px] 
            text-left 
            text-[#292F36]
            w-[450px]
            line-clamp-3">
            We Tackle The Most Challenging Designs
            </h3>
                <p class=" font-['Jost'] 
                text-[22px]
                font-normal
                leading-[33px] 
                tracking-[.21px]
                text-left
                text-[#4D5053]
                mt-[42px] mb-[46px] w-[531px]
                line-clamp-4">The world needs innovators and problem solvers who turn 
                challenges into greater opportunities. We have an insatiable curiosity about transformative trends challenging the status.</p>
            
            <div class="flex mb-[50px]">
                <a href="tel:012345678" target="_blank" class="btn-call p-[30px] bg-[#F4F0EC] rounded-[100px] hover:bg-[#CDA274]  ease-in duration-300 " > 
                    <svg class="phone" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.0012 26.0749C30.7796 24.8442 27.8211 23.0482 26.3857 22.3243C24.5164 21.3828 24.3625 21.3059 22.8933 22.3974C21.9133 23.1258 21.2617 23.7766 20.1148 23.532C18.9678 23.2874 16.4754 21.9082 14.2931 19.7329C12.1107 17.5576 10.6514 14.9931 10.4061 13.8501C10.1607 12.7071 10.8222 12.0632 11.5438 11.081C12.5607 9.69642 12.4838 9.46566 11.6145 7.59651C10.9368 6.14273 9.08833 3.21208 7.85291 1.99675C6.53134 0.691422 6.53134 0.922181 5.67979 1.27601C4.98652 1.56768 4.32141 1.92222 3.69281 2.3352C2.46201 3.15285 1.77892 3.83206 1.30122 4.85278C0.823512 5.87351 0.608892 8.26648 3.07588 12.7478C5.54286 17.2292 7.27367 19.5206 10.8561 23.0928C14.4385 26.6649 17.1931 28.5856 21.2202 30.844C26.2018 33.6339 28.1126 33.09 29.1365 32.6131C30.1604 32.1362 30.8427 31.4593 31.662 30.2286C32.076 29.6011 32.4314 28.9368 32.7235 28.2441C33.0781 27.3957 33.3089 27.3957 32.0012 26.0749Z" stroke="#CDA274" stroke-width="2" stroke-miterlimit="10"/>
                    </svg>
                   
                </a>
            
            
            <div class="ml-[20px]">
            <a href="tel:012345678" target="_blank" class="font-['Jost'] 
                text-[24px] 
                font-normal 
                leading-[36px] 
                tracking-[.21px];
                text-[left]
                text-[#4D5053]
                block"
                >012345678</a>
            <span  class="font-['Jost'] 
                text-[22px] 
                font-normal 
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

<style  lang="scss">

.btn-call:hover{
  .phone{
     path{
      fill:white;
      transition:cubic-bezier(0.55, 0.085, 0.68, 0.53);
    }
  }
}

</style>

