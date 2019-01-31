<template>
  <div class="home-view">
    <Introduction></Introduction>
    <PortfolioList></PortfolioList>
    <CompanyList></CompanyList>
    <Skills></Skills>
    <About></About>
  </div>
</template>

<script>
import Introduction from '@/components/Introduction.vue'
import PortfolioList from '@/components/PortfolioList.vue'
import CompanyList from '@/components/CompanyList.vue'
import Skills from '@/components/Skills.vue'
import About from '@/components/About.vue'

export default {
  name: 'home',
  components: {
    Introduction,
    PortfolioList,
    CompanyList,
    Skills,
    About
  }
}
</script>

<style scoped lang="scss">
.home-view {

}
</style>
