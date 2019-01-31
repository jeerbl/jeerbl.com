<template>
  <div class="company-list">
    <h2>Companies I've Worked With</h2>
    <div class="companies">
      <div class="company"
            v-for="company in companies"
            :key="company.name">
        <img :src="'http://localhost:8081' + company.logo.path"
              :alt="company.name">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      loading: true
    }
  },
  methods: {
    ...mapActions([
      'getCompanyList'
    ])
  },
  computed: {
    ...mapGetters([
      'companies'
    ])
  },
  created () {
    this.getCompanyList()
    .then(this.loading = false)
  }
}
</script>

<style scoped lang="scss">
.company-list {
  padding: 4rem;

  .companies {
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;

    .company {
      align-self: center;
      flex-grow: 1;
      flex-basis: 0;
      padding: 1rem;

      img {
        display: block;
        margin: auto;
        max-height: 3rem;
      }
    }
  }
}
</style>
