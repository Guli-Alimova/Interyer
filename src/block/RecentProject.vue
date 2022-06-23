<template>
    <div class="pt-[113px] pb-[140px]">
        <div class="container">
            <h3 class="font-['DM Serif Display']
            text-[47px]
            text-normal
            leading-[62px] 
            tracking-[.22px] 
            text-center
            text-[#292F36]
            ">Recent Projects</h3>
            <div class="font-['Jost']
            text-[22px]
            text-normal
            leading-[33px] 
            tracking-[.22px]
            text-center
            pt-[20px]
            pb-[71px]
            ">
            <span class="block">With tools to make every part of your process more human and a support team</span>
            <span>excited to help you, getting started with us never been easier.</span>  
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
