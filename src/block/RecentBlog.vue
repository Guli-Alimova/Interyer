<template>
    <div class="pt-[143px] pb-[141px]">
        <h3 class="font-['DM Serif Display']
        text-[47px]
        text-normal
        leading-[62px] 
        tracking-[.22px] 
        text-center
        text-[#292F36]">Recent Blogs</h3>
            <div class="font-['Jost']
            text-[22px]
            text-normal
            leading-[33px] 
            tracking-[.22px]
            text-center
            pt-[20px]
            pb-[71px]">
                <span class="block">Get updates about our latest trends and techniques used in</span>
                <span>interior design project works.</span>
            </div>
        <div class="container">
            <div class="grid grid-cols-3 gap-4">
                <recent-blog-card/>
            </div>
        </div>
    </div>
</template>

<script>
import RecentBlogCard from "../components/RecentBlogCard.vue"

export default {
  components:{
    RecentBlogCard
  }
}
</script>
