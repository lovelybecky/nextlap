<template>
  <div id="app">
    <app-header></app-header>
	<router-view></router-view>
	<app-tail></app-tail>
  </div>
</template>

<script>
import header from './components/header.vue'
import tail from './components/tail.vue'
export default {
  name: 'app',
  components: {
    'app-header':header,
	'app-tail':tail
  },
  created(){
    this.$router.push('/about')
  }
}
</script>

<style>
@font-face {
	font-family:'Lato-Regular';
	src: url('./font/Lato-Regular.ttf');
}
@font-face {
	font-family:'Lato-Bold';
	src: url('./font/Lato-Bold.ttf');
}
@font-face {
	font-family:'JosefinSans-Bold';
	src: url('./font/JosefinSans-Bold.ttf');
}
@font-face {
	font-family:'Ubuntu-R';
	src: url('./font/Ubuntu-R.ttf');
}
@font-face {
	font-family:'Ubuntu-B';
	src: url('./font/Ubuntu-B.ttf');
}
#app {
   font-family: Lato-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}
</style>
