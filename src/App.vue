<template>
  <div class="container">
    <Layout/>

    <Content/>
  </div>
</template>

<script>
import Layout from './components/Layout.vue';
import Content from './components/Content.vue';

export default {
  name: 'App',
  components: {
    Layout,
    Content,
  },

  data() {
    return {

    };
  },
};
</script>

<style scoped lang="scss">
.container {
  padding: 0;
  background-color: #ECECF6;
  display: flex;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

}
</style>
