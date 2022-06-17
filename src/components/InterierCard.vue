<template>
    <div 
    v-for="(item, index ) in design" 
    :key="index" 
    class="text-center ">
        <h1 class="design-theme">{{item.theme}}</h1>
        <p class="design-text pt-4 pb-16">{{item.text}}</p>
        <button class="design-btn">View More 
            <img src="../assets/img/right-arrow-svgrepo-com.svg" class="img" alt="right">
        </button>
    </div>
</template>

<script >

export default{
    data(){
        return{
            design:[
                {
                    theme:"Interior Design",
                    text:"Enhancing the interior to achieve a healthier environment for the people using right space.",
                 
                },
                 {
                    theme:"Furniture",
                    text:"Movable articles that are used to make a room or building suitable for living or working.",
                    
                },
                 {
                    theme:"Flooring",
                    text:"Thin object any finished material applied over a floor structure to provide a walking surface.",
                    
                },
            ]
        }
    }
}
</script>


<style scoped>
.design-theme{
    font-family: DM Serif Display;
    font-size: 25px;
    font-weight: 400;
    line-height: 39px;
    letter-spacing: 0.2199999988079071px;
    text-align: center;
    color:#292F36;

}
.design-text{
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.2px;
    color:#4D5053;

}
.design-btn{
    font-family: Jost;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0.3px;
    color:#4D5053;
}
.img{
    width: 24px;
    display: inline;
    margin-left:9px;
 
    }
</style>