<template>
    <div v-for="(el, i) in blog" 
    :key="i"
    class="pt-[21px] pr-[21px] pb-[41px] pl-[21px] border-solid border-2 border-[#E7E7E7] rounded-[62px] relative">
        <img :src="el.photo"  alt="" >
        <router-link to="/" class="
        absolute
        bottom-[222px]
        left-[45px]
        font-['Jost'] 
        text-[16px] 
        font-normal
        leading-[24px]
        tracking-[.22px]
        px-[9px] py-[11px]
        bg-[#fff]
        rounded-t-[8px]
        rounded-r-[8px]
        ">{{el.room}}</router-link>
        <!-- bitta uchi border-radius bolmagan uni qanday qilish kere  -->
        <h3 class="font-['DM Serif Display'] 
        text-[25px] 
        font-normal
        leading-[35px] 
        tracking-[.5px]
        text-[#292F36]
        line-clamp-3
        ">{{el.name}}</h3>
        <div class="flex justify-between pt-[20px] items-center">
            <span class="font-['Jost'] 
            text-[16px] 
            font-normal
            leading-[24px] 
            tracking-[.22px] 
            ">{{el.date}}</span>
           <button class="px-[22px] py-[22px] bg-[#F4F0EC] rounded-[100px] ">
                <img src="@/assets/img/right-svgrepo-com.svg" class="w-[18px]" alt="arrow">
            </button>
        </div>
    </div>
</template>

<script>


export default {
  data(){
    return{
        blog:[
            {
                photo:require("@/assets/img/kitchen.png"),
                room:"Kitchen Design",
                name:"Residential Interior Designer In New York, USA",
                date:"November 23, 2021"
            },
            {
                photo:require("@/assets/img/living.png"),
                room:"Living Room",
                name:"How To Choose The Best Wall Art & Decor House?",
                date:"November 23, 2021"
            },
            {
                photo:require("@/assets/img/minimalist.png"),
                room:"Minimalist Interior",
                name:"Tips To Increase The Interior Value Of Your House",
                date:"November 23, 2021"
            },
            {
                photo:require("@/assets/img/kitchen2.png"),
                room:"Kitchen Design",
                name:"Best Solution For Any Office & Business Interior",
                date:"November 23, 2021"
            },
            {
                photo:require("@/assets/img/living2.png"),
                room:"Living Room",
                name:"Get Solution For Building Construction Work",
                date:"November 23, 2021"
            },
            {
                photo:require("@/assets/img/minimalizm2.png"),
                room:"Minimalist Interior",
                name:"Attain The Best Finish For The Kitchen Cabinets",
                date:"November 23, 2021"
            },
        ]
    }
  }
}
</script>
