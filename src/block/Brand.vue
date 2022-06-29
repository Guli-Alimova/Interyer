<template>
    <div class="pt-[140px]">
        <div class="container">
            <div class="flex justify-between">
               <div
            v-for="(item, index) in brands"
            :key="index"
            >
             <img :src="item.photo" alt=""> 
            </div>   
            </div>
          
        </div>
    </div> 
</template>

<script>


export default {
    data(){
        return{
            brands:[
                {
                    photo:require("@/assets/img/IMAGE14.png")
                },
                {
                    photo:require("@/assets/img/IMAGE15.png")
                },
                {
                    photo:require("@/assets/img/IMAGE16.png")
                },
                {
                    photo:require("@/assets/img/IMAGE17.png")
                },
                {
                    photo:require("@/assets/img/IMAGE18.png")
                }

            ]
        }
      
    }
}
</script>
