<template>
  <div class="container">
    <Layout/>

    <Content v-if="isMainPage"/>

    <List v-if="isListPage"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Layout from './components/Layout.vue';
import Content from './components/Content.vue';
import List from './components/List.vue';

export default {
  name: 'App',
  components: {
    Layout,
    Content,
    List,
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters({
      isMainPage: 'isMainPage',
      isListPage: 'isListPage',
    }),
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
