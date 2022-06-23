<template>
    <div>
        <div class="container bg-[#F4F0EC] rounded-[70px] pt-[103px] pb-[121px]">
            <h3 class="font-['DM Serif Display'] 
            text-[45px]
            text-normal
            leading-[59px] 
            tracking-[.21px] 
            text-center
            text-[#292F36]
            pb-[47px]
            ">
                What the People Thinks <br/> About Interno
            </h3>
           <PeopleCard/>
        </div>
    </div>
</template>

<script >
import PeopleCard from "@/components/PeopleCards.vue"
export default {
    components:{
        PeopleCard
    }
}
</script>