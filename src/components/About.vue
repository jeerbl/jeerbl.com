<template>
  <div class="about clearfix">
    <h2>Who I Am</h2>
    <div>
      <div class="image">
        <img :src="'http://localhost:8081' + about.avatar.path" alt="Jerome Brunel">
      </div>
      <div class="text">
        <p v-html="about.text"></p>
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
      'getAbout'
    ])
  },
  computed: {
    ...mapGetters([
      'about'
    ])
  },
  created () {
    this.getAbout()
      .then(this.loading = false)
  }
}
</script>

<style scoped lang="scss">
@import '../styles/colors';

.about {
  padding: 4rem;

  .image {
    float: right;
    width: 15rem;
    margin-left: 3rem;
    min-height: 30vh;

    img {
      display: block;
      max-width: 100%;
    }
  }

  .text {
    p {
      margin: 1rem 0;
      font-size: 1.25rem;
    }
  }
}
</style>
