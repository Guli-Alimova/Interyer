<template>
<div class="flex justify-between columns-3">
    <div 
    v-for="(item, index) in people" 
    :key="index"
    class="bg-[#fff] pt-[50px] pr-[79px] pb-[45px] pl-[35px] rounded-[30px] ">
           <div class="flex justify-between">
                <img :src="item.img" alt="">
            <div>
                <span class="font-['DM Serif Display]
                text-[25px]
                text-normal
                leading-[38px]
                tracking-[.22px]
                text-[#292F36]
                block
                ">{{item.name}}</span>
                <span class="font-['Jost'] 
                text-[18px]
                text-normal
                leading-[27px]
                tracking-[.22px]
                ">{{item.city}}</span>
            </div>
           </div>  
                <p class="font-['Jost']
                text-[20px]
                text-normal
                leading-[30px]
                tracking-[.22px]
                w-[244px]
                pt-[25px]
                ">{{item.comment}}</p>
    </div>
</div>    
</template>

<script>


export default {
    data(){
        return{
            people:[
                {
                    img:require('@/assets/img/image1.svg'),
                    name:"Lisa Clairton",
                    city:"New York, USA",
                    comment:"We selected Interno interior because of rigorous design background & education."
                },
                {
                    img:require("@/assets/img/IMAGE2.svg"),
                    name:"David Knight",
                    city:"David Knight",
                    comment:"The team exceeded our expectations and emerged as leaders of our project’s."
                },
                {
                    img:require("@/assets/img/IMAGE3.svg"),
                    name:"Lisa Clairton",
                    city:"Paris, France",
                    comment:"They balanced the architectural vision and the project realities beautifully."
                },
            ]
        }
    }
}
</script>


