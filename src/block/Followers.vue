<template>
<div class="bg-[#F4F0EC] pt-[140px] pb-[140px]">
    <div class="container">
        <div class="grid grid-cols-4">
            <div v-for="(el, i) in follow" :key="i" class="border-r-2  border-[#CDA274] last:border-none text-center">
                <h3 class="font-['DM Serif Display']
                    text-[85px]
                    leading-[128px] 
                    tracking-[1.7px]
                    text-[#CDA274]
                    ">{{el.number}}</h3>
                <span class="font-['Jost']
                    text-[22px]
                    leading-[33px]
                    tracking-[.22px]
                   ">{{el.active}}</span>

            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            follow: [{
                    number: "12",
                    active: "Years Of Experiance",

                },
                {
                    number: "5K",
                    active: "Success Project",

                },
                {
                    number: "1K",
                    active: "Active Project",

                },
                {
                    number: "4K",
                    active: "Happy Customers"
                },
            ]
        }
    }
}
</script>
