<template>
<header class="py-[38px] px-[0]">
    <div class="container">
        <div class="flex justify-between items-center ">
            <router-link to="/">
                <img src="../assets/img/IMAGE.svg" alt="logo">
            </router-link>
            <div>
                <a v-for="(item, index) in pages" :key="index" :href="item.href" class=" font-['Jost']
                text-[19px] 
                leading-[30px]
                tracking-[.40px]
                text-[#292F36] 
                hover:text-[#CDA274] mr-[20px] ml-[20px] text-center
                ease-in duration-300 active:bg-white-700  active:border-b-4 active:border-[#CDA274]  ">
                    {{item.link}}
                </a>

            </div>

        </div>
    </div>
</header>
</template>

<script>
export default {
    data() {
        return {
            pages: [{
                    link: 'Home',
                    href: "/"
                },
                {
                    link: 'About Us',
                    href: "about"
                },
                {
                    link: 'Services',
                    href: "services"
                },
                {
                    link: 'Pages',
                    href: "pages"
                },
                {
                    link: 'Contact Us',
                    href: "contact"
                }

            ]
        }
    }
}
</script>

<style lang="scss">

</style>
