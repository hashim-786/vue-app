<template>
    <the-error v-if="isInValidInput" title="Invalid Input">
        <template #default>
            <p>Unfortunately, one of the input in not valid, please make sure to add valid value in each one!</p>
            <p>Add Atleast few character in each input</p>
        </template>
        <template #action>
            <base-button @click="accept">Okay</base-button>
        </template>
    </the-error>
    <base-card>
    <form @submit.prevent="addResources">
        <div class="form-control">
            <label for="title">Title</label>
            <input type="text" name="title" id="title" ref="titleInput">
        </div>
        <div class="form-control">
            <label for="description">Description</label>
            <textarea name="description" id="description" rows="3" ref="DescInput"></textarea>
        </div>
        <div class="form-control">
            <label for="link">Link</label>
            <input type="url" name="link" id="link" ref="linkInput">
        </div>
        <div>
            <base-button type="submit">Add Resources</base-button>
        </div>
    </form>
</base-card>
</template>

<script>



export default {


    inject:['newResource'],

    data(){
        return{
            isInValidInput: false
        }
    },
    methods:{
        addResources(){
            const enteredTitle = this.$refs.titleInput.value
            const enteredDesc = this.$refs.DescInput.value
            const enteredLink = this.$refs.linkInput.value
            if(enteredTitle.trim()==='' ||	enteredDesc.trim()==='' || enteredLink.trim()==='')
            this.isInValidInput = true
            else
            this.newResource(enteredTitle, enteredDesc, enteredLink)
        },
        accept(){
            this.isInValidInput = false
        }
      
    }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>