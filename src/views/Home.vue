<template>
  <div class="home-view">
    <Introduction></Introduction>
    <PortfolioList></PortfolioList>
  </div>
</template>

<script>
import Introduction from '@/components/Introduction.vue'
import PortfolioList from '@/components/PortfolioList.vue'

export default {
  name: 'home',
  components: {
    Introduction,
    PortfolioList
  }
}
</script>

<style scoped lang="scss">
.home-view {

}
</style>
