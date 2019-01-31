<template>
  <div class="portfolio-list">
    <h2>Featured Projects</h2>
    <div class="portfolio-list-inner">
      <div class="left-column">
        <ul>
          <li v-for="project in projects" :key="project.slug">
            <a class="list-element"
                @mouseover="selectProject(project)">{{project.name}}</a>
          </li>
        </ul>
      </div>
      <div class="right-column">
        <img :src="'http://localhost:8081' + activeProject.image.path">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      loading: true,
      selectedProject: null
    }
  },
  methods: {
    ...mapActions([
      'getPortfolioList'
    ]),
    selectProject (project) {
      this.selectedProject = project
    }
  },
  computed: {
    ...mapGetters([
      'projects'
    ]),
    activeProject () {
      return this.selectedProject || this.projects[0]
    }
  },
  created () {
    this.getPortfolioList()
      .then(this.loading = false)
  }
}
</script>

<style scoped lang="scss">
@import '../styles/colors';

.portfolio-list {
  min-height: 100vh;
  background-color: $transparentGray;
  padding: 4rem;
  box-sizing: border-box;

  .portfolio-list-inner {
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: calc(100vh - 12.5rem);

    .left-column, .right-column {
      align-self: center;
      flex-grow: 1;
      flex-basis: 0;
    }

    .right-column {
      img {
        max-width: 100%;
      }
    }

    .left-column {
      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;

        li {
          margin: 0.5rem 0;
          padding: 0;

          a.list-element {
            color: $blue;
            text-decoration: none;
            font-size: 1.125rem;
            font-weight: 600;
            display: block;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>
