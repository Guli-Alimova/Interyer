<template>
    <section class="hero">
        <div class="container">
            <h1 class="hero-title">Let's Create Your Dream Interior</h1>
            <div class="hero-text">
            <p>The world needs innovators and problem solvers who turn</p>
            <p>challenges into greater opportunities.</p>  
            </div>
          <my-button >Get Started</my-button>
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
    padding:188px 0 260px 0;
}
.hero-title{
font-family: DM Serif Display;
font-size: 80px;
font-weight: 400;
line-height: 96px;
letter-spacing: 0.2199999988079071px;
text-align: left;
width:595px;
color:#292F36;

}
.hero-text{
font-family: Jost;
font-size: 22px;
font-weight: 400;
line-height: 33px;
letter-spacing: 0.2199999988079071px;
text-align: left;
padding:19px 0 35px 0;

}
</style>