<template>
    <header class="header_wrapper">
        <div class="container">
            <div class="flex  justify-between ">
                <div> 
                <img src="../assets/img/IMAGE.svg" alt="logo">  
            </div>
            <div class="header_links">
                <a 
                href="/"
                v-for="(item, index) in pages" 
                :key="index"
                class="text-[#292F36]-400 hover:text-[#CDA274] pr-20px">
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
.header_wrapper {
    padding:38px 0;
  

}
.header_links a{
    padding:0 20px;
    text-align: center; 
    
}
</style>
 


