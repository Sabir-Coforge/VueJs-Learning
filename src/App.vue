<script setup>
import {onMounted, ref} from 'vue';


  const name = ref('Sabir');  
  const newTitle = ref('');
  const titles = ref (["Coforge", "HCL", "TCS"]);  
 
 const addTitle = () => {
      if(newTitle.value.trim() !==''){
        titles.value.push(newTitle.value);
        newTitle.value ='';
      }
    }

    const deleteTitle = (index) =>{
      titles.value.splice(index, 1);
    }

    onMounted(async ()=>{
      try{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
        titles.value = data.map((title) => title.title);
      }catch(e){
        console.log(`Error: ${e}`)
      }
    })

</script>

<template>
 <h1 class="">{{ name }}</h1>
 <form @submit.prevent="addTitle">
  <label for="newTitle">Add Title</label>
  <input type="text" id="newTitle" name="newTitle" v-model="newTitle" />
  <button type="submit">Submit</button>
  </form>

  <h2>Titles:</h2>
  <ul>
    <li v-for="(title, index) in titles" :key="title">{{ title}}
      <button @click="deleteTitle(index)">X</button>
    </li>
    
  </ul>
</template>

<style scoped>
.btn {
  background-color: #42b883;
  color: white;
  padding: 4px 2px;
}
</style>
