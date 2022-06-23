<template>
    <div v-for="(item, index) in recent"
        :key="index"
        >
        <img :src="item.photo"  alt="photo" class="w-[100%] h-[661px]">
        <div class="flex justify-between pt-[24px] pb-[61px]">
            <div>
              <p class="font-['DM Serif Display']
            text-[24px]
            text-normal
            leading-[38px] 
            tracking-[.22px] 
            text-[#292F36]
            ">{{item.name}}</p>
            <span class="font-['Jost']
            text-[22px]
            text-normal
            leading-[33px] 
            tracking-[.22px]"
            >{{item.design}}</span>   
            </div>
                <button class="px-[28px] py-[28px] bg-[#F4F0EC] rounded-[100px] ">
                  <img src="@/assets/img/right-svgrepo-com.svg" class="w-[18px]" alt="arrow">
                </button>
        </div>
    </div>
</template>

<script>


export default {
   data(){
    return{
        recent:[
            {
                photo:require('@/assets/img/image19.png'),
                name:"Winery Dry Creek Building",
                design:"Art Modern"
            },
            {
                photo:require("@/assets/img/IMAGE20.png"),
                name:"Creative Workplace Design",
                design:"Minimalist"
            },
            {
                photo:require("@/assets/img/IMAGE21.png"),
                name:"Bedroom Interior Pot Work",
                design:"Modern"
            },
            {
                photo:require("@/assets/img/IMAGE22.png"),
                name:"Light Ambience Sepia Design",
                design:"Scandinavian"
            }
   
        ]
            
        }
    }
   
}
</script>
