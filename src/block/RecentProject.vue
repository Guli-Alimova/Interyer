<template>
    <div class="pt-[113px] pb-[140px]">
        <div class="container">
            <h3 class="font-['DM Serif Display']
            text-[47px]
            font-normal
            leading-[62px] 
            tracking-[.22px] 
            text-center
            text-[#292F36]
            line-clamp-2
            ">Recent Projects</h3>
            <div class="w-[786px]
            my-0
            mx-auto">
            <p class="font-['Jost']
            text-[22px]
            font-normal
            leading-[33px] 
            tracking-[.22px]
            text-center
            pt-[20px]
            pb-[71px]
            line-clamp-3
            ">With tools to make every part of your process more human and a support team excited to help you, getting started with us never been easier.</p> 
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <recent-card/>   
            </div>
          
        </div>
    </div>
</template>


<script>
import RecentCard from "@/components/RecentCard.vue" 

export default {
  components:{
    RecentCard
  }
}
</script>
