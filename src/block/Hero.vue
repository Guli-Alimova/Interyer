<template>
    <section class="hero">
        <div class="container">
            <h1 class="font-['DM Serif Display']
            text-[80px] 
            font-normal
            leading-[96px] 
            tracking-[.22px]
            text-[left]
            w-[595px]
            text-[#292F36]
            line-clamp-3">Let's Create Your Dream Interior</h1>
            <p class="font-['Jost']
            text-[22px]
            font-normal;
            leading-[33px] 
            tracking-[.21px]
            text-left
            w-[577px]
            pt-[19px] pr-[0] pb-[35px] pl-[0] 
            line-clamp-3">The world needs innovators and problem solvers who turn challenges into greater opportunities.</p>          
            <my-button>Get Started </my-button>
            
          
      
        </div>

    </section>
</template>

<script>
import MyButton from "../UI/MyButton.vue"
export default{
    components:{
        MyButton
    }
    
}
</script>


<style scoped>
.hero{
    background-image: url('@/assets/img/hero.png');
    background-repeat: no-repeat;
    background-size: cover;
    padding:188px 0 260px 0;
}

</style>