<template>
  <div class="hello">
    <button id="toggle" v-on:click="content = !content">Toggle Data Property</button>
    <button id="log" v-on:click="logSomething">Log Something to Console</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      content: true
    } 
  },
  methods: {
    logSomething() {
      console.log('Something was logged to the console');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
