<template>
    <section>
      <section id="landing-bg-1">
        <div class="container">
          <h1>Hi, my name is Tiwi</h1>
          <p>I am a 26-year-old front-end poet from Indonesia.<br>On this website, you will find my stories from my work and personal life.</p>
        </div>
      </section>
      <section id="landing-page-description">
        <div class="container">
          <hr>
          <div class="row">
            <div class="col-sm-12 offset-md-1 col-md-10">
              <h4>
                I've been working as front-end poet for 4 years.
              </h4>
              <p>
                Front-End Poet, or publicly known as Front-End Developer, helps people to make their dream websites come true.<br>Why a Poet though? Building a website is like writing a poetry. Websites should express what the owner feels, imagines, emotional self-expression, high art, just like poetry.
              </p>
              <img src="@/static/name.png" alt="Pratiwi Sukmawati" draggable="false">
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
    },
    mounted: function(){
      let tes = document.getElementsByTagName('img');
      console.log(tes);
      document.getElementsByTagName('img').draggable = false;
    }
  }
</script>

<style lang="scss">
  img{
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  #landing-bg-1{
    background: url('~static/landing-bg-1.jpg') no-repeat center center;
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
  #landing-page-description{
    color: #333333;
    font-family: 'Raleway', 'sans-serif';
    margin: 5em 0;
    text-align: center;
    img{
      margin: 1.5em 0;
      max-height: 3em;
    }
    h4{
      font-weight: 700;
      margin-bottom: 1em;
    }
    hr{
      margin: 0 auto 3em auto;
      width: 10%;
    }
  }
</style>
