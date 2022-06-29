<template>
    <div 
    v-for="(item, index ) in design" 
    :key="index" 
    class="text-center w-[317px] ">
        <h1 class=" font-['DM Serif Display']
        text-[25px]
        font-normal
        leading-[39px] 
        tracking-[.22px]
        text-center;
        text-[#292F36]
        line-clamp-2">
        {{item.theme}}
        </h1>
        <p class="font-['Jost'] 
        text-[22px]
        font-normal
        leading-[33px] 
        tracking-[.22px] 
        text-[#4D5053] pt-4 pb-16
        line-clamp-4">{{item.text}}</p>
        <button class="font-[Jost] 
        text-[18px]
        font-normal
        leading-[27px]
        tracking-[.3px]
        text-[#4D5053]
        hover:text-[#CDA274]
        transition ease-in-out delay-150 hover:-translate-y-6 hover:scale-110  duration-300 ">View More 
         <svg class="w-[24px] inline ml-[21px] ml-[9px] "  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504.3 273.6l-112.1 104c-6.992 6.484-17.18 8.218-25.94 4.406c-8.758-3.812-14.42-12.45-14.42-21.1L351.9 288H32C14.33 288 .0002 273.7 .0002 255.1S14.33 224 32 224h319.9l0-72c0-9.547 5.66-18.19 14.42-22c8.754-3.809 18.95-2.075 25.94 4.41l112.1 104C514.6 247.9 514.6 264.1 504.3 273.6z" fill="#CDA274"/></svg>
            <!-- <img src="../assets/img/right-arrow-svgrepo-com.svg" class="w-[24px] inline ml-[9px]" alt="right"> -->
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