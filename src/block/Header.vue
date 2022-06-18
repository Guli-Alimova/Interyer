<template>
    <header class="p-[38px 0]">
        <div class="container">
            <div class="flex  justify-between items-center ">
                <div> 
                <img src="../assets/img/IMAGE.svg" alt="logo">  
            </div>
            <div>
                <a 
                href="/"
                v-for="(item, index) in pages" 
                :key="index"
                class="text-[#292F36] hover:text-[#CDA274] active:text-[#CDA274] m-[20px 0] text-center">
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
 


