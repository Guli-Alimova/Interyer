<template>
<div class="container bg-[#292F36] pt-[100px] pb-[95px] rounded-[70px]">
    <div class="text-center">
        <h3 class="font-['DM Serif Display']
        text-[50px]
        leading-[75px]
        tracking-[.21px] 
        text-white
        ">Wanna join the interno?</h3>
        <span class="font-['Jost']
        text-[22px] 
        leading-[33px] 
        tracking-[.22px] 
        text-white
        inline
        ">Contact Us & Get a Free Consultation</span>
    </div>
    <div class="text-center mt-[31px] ">
        <button class="join-btn pt-[22px]
        pr-[17px]
        pb-[22px]
        pl-[34px]
        font-['Jost']
        text-[18px]
        leading-[27px] 
        tracking-[.22px]
        bg-[#CDA274]
        text-[#fff]
        rounded-[18px]
        hover:bg-[#F4E1E1]
        hover:text-[#292F36]
        ">Connect With us
            <svg class=" w-[24px] inline ml-[21px] text-[#CDA274]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M504.3 273.6l-112.1 104c-6.992 6.484-17.18 8.218-25.94 4.406c-8.758-3.812-14.42-12.45-14.42-21.1L351.9 
         288H32C14.33 288 .0002 273.7 .0002 255.1S14.33 224 32 224h319.9l0-72c0-9.547 5.66-18.19 14.42-22c8.754-3.809 
         18.95-2.075 25.94 4.41l112.1 104C514.6 247.9 514.6 264.1 504.3 273.6z" fill="#292F36" /></svg>
        </button>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.join-btn:hover {
    svg {
        path {
            fill: #CDA274;
            transition: cubic-bezier(0.55, 0.085, 0.68, 0.53);
        }

    }
}
</style>
