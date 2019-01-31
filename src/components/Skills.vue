<template>
  <div class="skill-list">
    <h2>What I Do</h2>
    <ul class="skills">
      <li v-for="skill in skills" :key="skill">{{skill.name}}</li>
    </ul>
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
      'getSkillList'
    ])
  },
  computed: {
    ...mapGetters([
      'skills'
    ])
  },
  created () {
    this.getSkillList()
    .then(this.loading = false)
  }
}
</script>

<style scoped lang="scss">
@import '../styles/colors';

.skill-list {
  padding: 4rem;
  background-color: $transparentGray;

  ul.skills {
    margin: 2rem 1.5rem;
    padding: 0;
    font-size: 1.25rem;
    list-style-type: square;

    li {
      margin: 0.5rem 0;
    }
  }
}
</style>
