<template>
    <header class="py-[38px] px-[0]">
        <div class="container">
            <div class="flex justify-between items-center ">
                <router-link to="/"> 
                <img src="../assets/img/IMAGE.svg" alt="logo">  
                </router-link>
            <div>
                <a 
                href="/"
                v-for="(item, index) in pages" 
                :key="index"
                class=" font-['Jost']
                text-[19px] 
                text-normal
                leading-[30px]
                tracking-[.40px]
                text-[#292F36] 
                hover:text-[#CDA274] mr-[20px] ml-[20px] text-center
                ease-in duration-300">
                {{item.link}}
                </a>
                
            </div>  
            
            </div>                    
        </div>      
    </header>


</template>

<script>


export default {
    data(){
        return{
            pages:[
                {
                link :'Home', 
                },
                  {
                link :'About Us', 
                },
                  {
                link :'Servises', 
                },
                  {
                link :'Pages', 
                },
                  {
                link :'Contact Us', 
                }

          
            ]
        }
    }
}
</script>

<style lang="scss">

</style>
 


