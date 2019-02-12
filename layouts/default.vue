<template>
  <div>
    <headerDefault/>
      <nuxt/>
    <footerDefault/>
  </div>
</template>

<script>
  import FooterDefault from '~/components/FooterDefault';
  import HeaderDefault from '~/components/HeaderDefault';

  export default {
    components: {
      FooterDefault,
      HeaderDefault
    }
  }
</script>


<style>
  html {
    font-family: 'Raleway', 'Helvetica Neue', 'sans-serif';
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
</style>
