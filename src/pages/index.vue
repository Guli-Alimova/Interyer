<template>
    <Header />
    <Hero/>
    <Interier-design/>
    <ChellengingDesign/>
    <PeopleOpinion/>
    <Brand/>
    <RecentProject/>
    <Followers/>
    <RecentBlog/>
    <JoinInterno/>
</template>

<script>
import Header from "@/block/Header.vue"
import Hero from "@/block/Hero.vue"
import InterierDesign from "@/block/InterierDesigner.vue"
import ChellengingDesign from "@/block/ChellengingDesigner.vue"
import PeopleOpinion from "@/block/PeopleOpinion.vue"
import Brand from "@/block/Brand.vue"
import RecentProject from "@/block/RecentProject.vue"
import Followers from "@/block/Followers.vue"
import RecentBlog from "@/block/RecentBlog.vue"
import JoinInterno from "@/block/JoinInterno.vue"
export default {
   components:{
    Header,
    Hero,
    InterierDesign,
    ChellengingDesign,
    PeopleOpinion,
    Brand,
    RecentProject,
    Followers,
    RecentBlog,
    JoinInterno
   }
}
</script>

<style scoped>

</style>
