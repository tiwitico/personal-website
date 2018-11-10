<template>
  <section>
    <div class="box">
      <div>
        <!-- <img src="/logo-temporary.png" class="logo-temporary"> -->
        <h1>Coming Soon</h1>
        <p>I'm currently working on something fantastic.<br>I'll be here soon.</p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    components: {

    },
    head () {
      return {
        title: "Welcome to Tiwi's personal blog",
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          { hid: 'description', name: 'description', content: 'Pratiwi Sukmawati\'s personal blog'}
        ]
      }
    }
  }
</script>

<style>
  section{
    background: url('/bg.jpg') no-repeat fixed center;
    background-size: cover;
    font-family: 'Raleway', sans-serif;
  }

  h1, p{
    color: #fff;
    text-align: center;
  }

  h1{
    font-weight: 700;
  }

  p{
    letter-spacing: 0.4px;
  }

  @media (max-width: 576px) {
    section{
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
    section{
      padding: 220px 0;
    }

    h1{
      font-size: 80px;
    }

    p{
      font-size: 20px;
    }
  }

  @media (min-width: 768px) and (max-width: 992px){
    section{
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
    section{
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
