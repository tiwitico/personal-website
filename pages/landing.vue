<template>
  <section>
    <div class="box">
      <div class="container">
        <!-- <img src="/logo-temporary.png" class="logo-temporary"> -->
        <h5>Hello, my name is</h5>
        <h1>Pratiwi Sukmawati</h1>
        <h3>I am a front-end web developer.</h3>
      </div>
    </div>
    <title/>
  </section>
</template>

<script>
  import Title from '~/components/Title';

  export default {
    components: {
        Title
    },
    head () {
      return {
        title: "Welcome to Tiwi's personal blog",
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: 'Pratiwi Sukmawati\'s personal blog'},
        ],
        bodyAttrs: {
          style: 'height:100%;'
        }
      }
    }
  }
</script>

<style>
  .box{
    background: url('/bg.jpg') no-repeat fixed center;
    background-size: cover;
    font-family: 'Raleway', sans-serif;
  }

  h1, h2, h3, h4,h5,p{
    color: #fff;
  }

  h1{
    font-weight: 700;
  }

  p{
    letter-spacing: 0.4px;
  }

  @media (max-width: 576px) {
    .box{
      padding: 150px 0;
    }

    h1{
      font-size: 65px;
    }

    p{
      font-size: 16px;
    }
  }

  @media (min-width: 576px) and (max-width: 768px){
    .box{
      padding: 200px 0;
    }

    h1{
      font-size: 80px;
    }

    p{
      font-size: 20px;
    }
  }

  @media (min-width: 768px) and (max-width: 992px){
    .box{
      padding: 210px 0;
    }

    h1{
      font-size: 70px;
    }

    p{
      font-size: 20px;
    }
  }

  @media (min-width: 992px) {
    .box{
      padding: 250px 0;
    }

    h1{
      font-size: 80px;
    }

    p{
      font-size: 20px;
    }
  }

  .logo-temporary{
    max-width: 200px;
  }
</style>
