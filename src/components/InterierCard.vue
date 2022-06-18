<template>
    <div 
    v-for="(item, index ) in design" 
    :key="index" 
    class="text-center ">
        <h1 class=" font-['DM Serif Display']
        text-[25px]
        text-normal
        leading-[39px] 
        tracking-[.22px]
        text-center;
        text-[#292F36]">
        {{item.theme}}
        </h1>
        <p class="text-['Jost'] ;
        text-[22px]
        text-normal
        leading-[33px] 
        tracking-[0.22px] 
        text-[#4D5053] pt-4 pb-16">{{item.text}}</p>
        <button class="text-[Jost] 
        text-[18px]
        text-normal
        leading-[27px]
        tracking-[0.3px]
        text-[#4D5053]">View More 
            <img src="../assets/img/right-arrow-svgrepo-com.svg" class="w-[24px] inline ml-[9px]" alt="right">
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

</style>