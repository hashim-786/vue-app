<template>
   <ul>
   <learning-resources
      v-for="resources in ulResources"
         :key="resources.id"
         :id="resources.id"
         :title="resources.title"
         :description="resources.description"
         :link="resources.link"></learning-resources>
    </ul>

</template>

<script>
import LearningResources from './LearningResources.vue'

export default {
    components:{
      LearningResources
    },
    inject:['ulResources']
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>