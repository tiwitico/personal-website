<template>
    <section>
      <section id="landing-bg-1">
        <div class="container">
          <h1>Hi, my name is Tiwi</h1>
          <p>I am a 26-year-old front-end developer from Indonesia.<br>On this website, you will find my stories from my work and personal life.</p>
        </div>
      </section>
      <section id="landing-highlight">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div id="landing-hightlight_blog">

              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
</template>

<script>
  import FooterDefault from '~/components/FooterDefault';
  import HeaderDefault from '~/components/HeaderDefault';

  export default {
    components: {
      FooterDefault,
      HeaderDefault
    },
    head () {
      return {
        title: "Tiwi's Personal Blog",
        meta: [
          { hid: 'description', name: 'description', content: 'Pratiwi Sukmawati\'s personal blog'},
        ],
        bodyAttrs: {
          style: 'height:100%;'
        }
      }
    }
  }
</script>

<style lang="scss">
  #landing-bg-1{
    background: url('/landing-bg-1.jpg') no-repeat center center;
    background-size: cover;
    color: #333;
    font-family: 'Raleway', 'sans-serif';
    min-height: 500px;
    padding: 120px 0 150px 0;
    text-align: center;
    h1{
      font-size: 3em;
      margin-bottom: 0.2em;
    }
  }
  #landing-highlight{
    margin: 3em 0;
    #landing-hightlight_blog{
      background: url('/blog-bg.jpg') no-repeat center center;
      background: cover;
      padding: 10em 0;
    }
  }
</style>
