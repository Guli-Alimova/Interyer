<template>
    <div>
        <div class="container pt-[142px] pb-[36px]">
            <div  class="flex justify-between pb-[111px]">
            <router-link to="/"> 
                <img src="@/assets/img/IMAGE.svg" alt="logo"> 
                <p class="font-['Jost']
                text-[22px] 
                text-normal
                leading-[33px] 
                tracking-[.22px] 
                mt-[25px]
                mb-[31px]
                w-[326px]
                line-clamp-3
                ">We are the leading architect and interior design firm in the world.</p> 
                <div>
                <button  v-for="(el, i) in icon"
                :key="i"
                >
                <img :src="el.icon" alt="" class="w-[17px] mr-[40px] ">  
                </button>   
                </div>
                 
            </router-link>
            
            <div>
                <h3 class="font-['DM Serif Display']
                text-[25px] 
                font-normal
                leading-[38px] 
                tracking-[.22px] 
                text-[#292F36]
                mb-[21px]
                ">Pages</h3>
                <router-link to="#" v-for="(el, index) in pages"
                :key="index"
                class="block 
                font-['Jost']
                text-[22px] 
                font-normal
                leading-[33px] 
                tracking-[.22px]
                mb-[30px]
               cursor-pointer
               hover:text-[#CDA274]">
                   {{el.name}}
                </router-link> 
            </div>
               
            <div>
               <h3 class="font-['DM Serif Display']
                text-[25px] 
                font-normal
                leading-[38px] 
                tracking-[.22px] 
                text-[#292F36]
                mb-[21px]
                ">Explore</h3>
                <router-link to="#" v-for="(el, index) in explore"
                :key="index" 
                class="block 
                font-['Jost']
                text-[22px] 
                font-normal
                leading-[33px] 
                tracking-[.22px]
                mb-[30px]
                cursor-pointer
                hover:text-[#CDA274]">{{el.title}}</router-link> 
            </div>
                
            <div>
                <h3 class="font-['DM Serif Display']
                text-[25px] 
                font-normal
                leading-[38px] 
                tracking-[.22px] 
                text-[#292F36]
                mb-[21px]
                w-[321px]
                ">Contact</h3>
                <router-link to="#" class="block 
                font-['Jost']
                text-[22px] 
                font-normal
                leading-[33px] 
                tracking-[.22px]
                mb-[30px]
                cursor-pointer
                hover:text-[#CDA274]
                w-[321px]">53, East Birchwood Ave.  Brooklyn, New York 11201, USA.</router-link>
                <router-link to="#" class="block 
                font-['Jost']
                text-[22px] 
                font-normal
                leading-[33px] 
                tracking-[.22px]
                mb-[30px]
                hover:text-[#CDA274]
                cursor-pointer">contact@interno.com</router-link>
                <router-link to="#" class="block 
                font-['Jost']
                text-[22px] 
                font-normal
                leading-[33px] 
                tracking-[.22px]
                mb-[30px]
                hover:text-[#CDA274]
                cursor-pointer">(123) 456 - 7890</router-link>
            </div>      
            </div>
        <div class="pt-[35px] 
        border-t-2 
        text-center
        ">
        <p class="inline 
        text-center
        font-['Jost']
        text-[22px] 
        font-normal
        leading-[33px] 
        tracking-[.22px]">Copyright © Interno | Designed by  </p>  
        <span class="text-[#CDA274] font-['Jost']
        text-[22px] 
        font-normal
        leading-[33px] 
        tracking-[.22px]">Victorflow   </span>Templates - Powered by 
        <span class="text-[#CDA274] font-['Jost']
        text-[22px] 
        font-normal
        leading-[33px] 
        tracking-[.22px]">Webflow</span>
        </div> 

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