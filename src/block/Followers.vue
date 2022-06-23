<template>
    <div class="bg-[#F4F0EC] pt-[140px] pb-[140px]">
        <div class="container">
            <div class="flex justify-between text-center">
                <div v-for="(el, i) in follow"
                :key="i"
                class="relative">   
                    <h3 class="font-['DM Serif Display']
                    text-[85px]
                    text-normal
                    leading-[128px] 
                    tracking-[1.7px]
                    text-[#CDA274]
                    ">{{el.number}}</h3>
                    <span class="font-['Jost']
                    text-[22px]
                    text-normal
                    leading-[33px]
                    tracking-[.22px]
                   ">{{el.active}}</span>
                     <span class="bg-[#CDA274] w-[1px] h-[195px] inline-block absolute left-[253px] bottom-0 top-0"></span>
                 </div>
            
               
            </div>
        </div>
    </div>
</template>


<script>


export default {
  data(){
    return{
        follow:[
            {
                number:"12",
                active:"Years Of Experiance",
                
            },
            {
                number:"5K",
                active:"Success Project",
              
            },
            {
                number:"1K",
                active:"Active Project",
                
           
            },
            {
                number:"4K",
                active:"Happy Customers"
            },
        ]
    }
  }
}

</script>
