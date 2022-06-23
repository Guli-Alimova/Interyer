<template>
    <div>
        <div class="container grid grid-cols-4 gap-4 pt-[142px] pb-[81px]">
            <div> 
                <img src="@/assets/img/IMAGE.svg" alt="logo"> 
                <p class="font-['Jost']
                text-[22px] 
                text-normal
                leading-[33px] 
                tracking-[.22px] 
                mt-[25px]
                mb-[31px]
                ">We are the leading architect and interior design firm in the world.</p> 
                <div class="flex justify-between">
                <button  v-for="(el, i) in icon"
                :key="i"
                >
                <img :src="el.icon" alt="" class="w-[17px]">  
                </button>   
                </div>
                 
            </div>

            <div>
                <h3 class="font-['DM Serif Display']
                text-[25px] 
                text-normal
                leading-[38px] 
                tracking-[.22px] 
                text-[#292F36]
                mb-[21px]
                ">Pages</h3>
                <a href="#" v-for="(el, index) in pages"
                :key="index"
                class="block 
                font-['Jost']
                text-[22px] 
                text-normal
                leading-[33px] 
                tracking-[.22px]
                mb-[30px]
               cursor-pointer
               hover:text-[#CDA274]">
                   {{el.name}}
                </a> 
            </div>
               
            <div>
               <h3 class="font-['DM Serif Display']
                text-[25px] 
                text-normal
                leading-[38px] 
                tracking-[.22px] 
                text-[#292F36]
                mb-[21px]
                ">Explore</h3>
                <a href="#" v-for="(el, index) in explore"
                :key="index" 
                class="block 
                font-['Jost']
                text-[22px] 
                text-normal
                leading-[33px] 
                tracking-[.22px]
                mb-[30px]
                cursor-pointer
                hover:text-[#CDA274]">{{el.title}}</a> 
            </div>
                
            <div>
                <h3 class="font-['DM Serif Display']
                text-[25px] 
                text-normal
                leading-[38px] 
                tracking-[.22px] 
                text-[#292F36]
                mb-[21px]
                ">Contact</h3>
                <a href="#" class="block 
                font-['Jost']
                text-[22px] 
                text-normal
                leading-[33px] 
                tracking-[.22px]
                mb-[30px]
                cursor-pointer
                hover:text-[#CDA274]">53, East Birchwood Ave. Brooklyn, New York 11201, USA.</a>
                <a href="#" class="block 
                font-['Jost']
                text-[22px] 
                text-normal
                leading-[33px] 
                tracking-[.22px]
                mb-[30px]
                hover:text-[#CDA274]
                cursor-pointer">contact@interno.com</a>
                <a href="#" class="block 
                font-['Jost']
                text-[22px] 
                text-normal
                leading-[33px] 
                tracking-[.22px]
                mb-[30px]
                hover:text-[#CDA274]
                cursor-pointer">(123) 456 - 7890</a>
            </div>

        </div>

        <div class="pt-[35px] 
        pb-[36px] 
        border-t-2 
        text-center
        font-['Jost']
        text-[22px] 
        text-normal
        leading-[33px] 
        tracking-[.22px]
        ">
        <span>Copyright © Interno | Designed by   </span>  
        <span class="text-[#CDA274]">Victorflow   </span>
        <span>Templates - Powered by   </span>
        <span class="text-[#CDA274]">Webflow</span>
        </div>
    </div>
</template>

<script >

export default {
    data(){
        return{
            icon:[
                {
                    icon:require("@/assets/img/facebook-svgrepo-com.svg")
                },
                {
                    icon:require("@/assets/img/twitter-svgrepo-com.svg")
                },
                {
                    icon:require("@/assets/img/linkedin-svgrepo-com.svg")
                },
                {
                    icon:require("@/assets/img/instagram-svgrepo-com.svg")
                }
            ],

            pages:[
                {
                    name:"Style Guide"
                },
                {
                    name:"Protected"
                },
                {
                    name:"Licenses"
                },
                {
                    name:"Changelog"
                },
                {
                    name:"404"
                }
            ],

            explore:[
                {
                    title:"About Us"
                },
                {
                    title:"Recent Blog"
                },
                {
                    title:"Pricing Plan"
                },
                {
                    title:"Our Projects"
                },
                {
                    title:"Contact Us"
                }
            ]
        }
    }
}
</script>