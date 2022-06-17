<template>
    <div class="interier">
        <div class="container">
            <div class="flex">
              <interier-card/>     
            </div>   
        </div>
 
    </div>
</template>

<script >
import InterierCard from "@/components/InterierCard.vue"

export default{
  components:{
    InterierCard
  }
}
</script>


<style scoped>
.interier{
    padding:175px 0 170px 0;
}
</style>
