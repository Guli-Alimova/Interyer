<template>
    <section class="hero">
        <div class="container">
            <h1 class="text-['DM Serif Display']
            text-[80px] 
            text-normal
            leading-[96px] 
            tracking-[0.2px]
            text-[left]
            w-[595px]
            text-[#292F36]">Let's Create Your Dream Interior</h1>
            <div class="text-['Jost'];
            text-[22px]
            text-normal;
            leading-[33px] 
            tracking-[0.21px]
            text-left
            p-[19px 0 35px 0]">
            <p>The world needs innovators and problem solvers who turn</p>
            <p>challenges into greater opportunities.</p>  
            </div>
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