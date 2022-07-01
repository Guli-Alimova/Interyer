<template>
<div v-for="(item, index) in recent" :key="index">
    <div class="max-w-[590px] max-h-[661px]">
        <img :src="item.photo" alt="photo" class="w-full h-full">
    </div>

    <div class="flex justify-between pt-[24px] pb-[61px]">
        <div class="max-w-[325px]">
            <p class="font-['DM Serif Display']
            text-[24px]
            leading-[38px] 
            tracking-[.22px] 
            text-[#292F36]
            line-clamp-1
            ">{{item.name}}</p>
            <span class="font-['Jost']
            text-[22px]
            leading-[33px] 
            tracking-[.22px]
            line-clamp-1">{{item.design}}</span>
        </div>
        <button class="px-[32px] py-[28px] bg-[#F4F0EC] rounded-[100px] hover:bg-[#CDA274]  ease-in duration-300  ">
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.771 14.6859L7.71386 8.00017L1.771 1.31445" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            recent: [{
                    photo: require('@/assets/img/image19.png'),
                    name: "Winery Dry Creek Building",
                    design: "Art Modern"
                },
                {
                    photo: require("@/assets/img/IMAGE20.png"),
                    name: "Creative Workplace Design",
                    design: "Minimalist"
                },
                {
                    photo: require("@/assets/img/IMAGE21.png"),
                    name: "Bedroom Interior Pot Work",
                    design: "Modern"
                },
                {
                    photo: require("@/assets/img/IMAGE22.png"),
                    name: "Light Ambience Sepia Design",
                    design: "Scandinavian"
                }

            ]

        }
    }

}
</script>
