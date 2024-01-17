<template>
  <Header></Header>
  <Main></Main>
</template>

<script>
  import Header from './components/paginaInicial/header.vue';
  import Main from './components/paginaInicial/main.vue';

  export default {
    name:"App",
    components: {
      Header,
      Main
    }
  }
</script>


<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  :root{
    --Header-Background:#171717;
    --Header-H1:#00BF63;
    --Header-P:#FFF;
    --Header-VueJs:#7ED957;
    --Header-PhPYt:#FF3131;
    --Header-NoxusJr:#0097B2;
    --Header-NoxusJr-Hover:#01b5d4;
    --Header-Botao-Background:#3B3B3B;
    --Header-Botao-Texto:#D9D9D9;

    --Main-Background:#D9D9D9;
    --Main-H2:#009CBF;
    --Main-P:#000;
    --Main-Div:#545454;
    --Main-ScrollBar:#c5c5c5;
    --Main-ScrollBar-Thumb:#b9b9b9;
    --Main-ScrollBar-Button:#bdbdbd;
    --Main-Credito-Texto:#ececec;
    --Main-Credito-Texto-Hover:#ffffff;
    --Main-Credito-Background:#009CBF;
    --Main-Credito-Background-Hover:#00708a;
  }

  .dark:root{
      --Main-Background:#2e2e2e;
      --Main-H2:#BF5A00;
      --Main-P:#f5f5f5;
      --Main-Div:#545454;
      --Main-ScrollBar:#414141;
      --Main-ScrollBar-Thumb:#464646;
      --Main-ScrollBar-Button:#393939;
      --Main-Credito-Texto:#ececec;
      --Main-Credito-Texto-Hover:#ffffff;
      --Main-Credito-Background:#a74e01;
      --Main-Credito-Background-Hover:#773401;
  }

  ::-webkit-scrollbar{
    background-color: rgb(168, 168, 168);
    width: 5px;
  }

  ::-webkit-scrollbar-thumb{
      background-color: rgb(100, 100, 100);
  }

</style>