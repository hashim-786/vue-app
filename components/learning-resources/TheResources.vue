<template>
    <base-card>
    <base-button  @click="swapTab('stored-resources')" :mode="checkStored">Stored Resources</base-button>
     <base-button @click="swapTab('add-resources')"    :mode="checkAdd" >Add Resources</base-button>
    </base-card>
    <keep-alive>
    <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue'
import AddResources from './AddResources.vue'
export default {
    components:{StoredResources,AddResources},
   data(){
       return{
          selectedTab: 'stored-resources',
          learningResources:[
            {
                id: 'Offical Website',
                title: 'Official Site of Vue',
                description: 'I can learn more on this site',
                link: 'https://vuejs.org/'

            },
            {
                id: 'Google',
                title: 'Official Site of Google',
                description: 'Google contains everything',
                link: 'https://www.google.com/'

            }
          ]
       }     
   },
   provide(){
       return{
           newResource: this.newResource,
          ulResources : this.learningResources,
          remove: this.removeResource
          
       }
       
   },
   computed:{
       checkStored(){
           return this.selectedTab === "stored-resources" ? null : 'flat'
       },
       checkAdd(){
           return this.selectedTab === "add-resources" ? null : 'flat'
       }
   },
   methods:{
       swapTab(tab){
           this.selectedTab = tab
       },
       newResource(title, des, url){
          const newRes = {
              id: new Date().toISOString,
              title: title,
              description: des,
              link: url
          }
          this.learningResources.unshift(newRes)
          this.selectedTab = 'stored-resources'
       },
       removeResource(resId){
           const resIndx = this.learningResources.findIndex((res)=> res.id === resId)
           this.learningResources.splice(resIndx,1)
       }
   }
    
}
</script>