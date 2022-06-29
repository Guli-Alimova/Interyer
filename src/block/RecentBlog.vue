<template>
    <div class="pt-[143px] pb-[141px]">
        <h3 class="font-['DM Serif Display']
        text-[47px]
        font-normal
        leading-[62px] 
        tracking-[.22px] 
        text-center
        text-[#292F36]
        line-clamp-2">Recent Blogs</h3>
            <p class="font-['Jost']
            text-[22px]
            font-normal
            leading-[33px] 
            tracking-[.22px]
            text-center
            pt-[20px]
            pb-[71px]
            w-[589px]
            my-0
            mx-auto
            line-clamp-3">Get updates about our latest trends and techniques used in interior design project works.</p>
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
