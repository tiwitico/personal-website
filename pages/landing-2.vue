<template>
  <section>
    <div class="box-tagline">
      <div class="container">
        <h5>Hello, my name is</h5>
        <h1>Pratiwi Sukmawati</h1>
        <h3>I am a front-end web developer.</h3>
      </div>
    </div>
    <div class="box-description">
      <p>I also work as Co-founder and Creative Director in Ordent, an IT consultant specialized in helping Businesses or Organizations on building their online presences (personal website, product catalog, e-commerce, etc).<br><br><b>From napkin sketch to online</b>: we help our customers to design and validate their ideas with <a href="http://www.gv.com/sprint/" target="_blank"><b>Design Sprint</b></a>, <b>develop</b> it, test it, and then <b>deliver</b> their presences to online world. We always make sure the websites we made are <b>easy-to-use</b> for all people, including people with disabilities, because we are serious on building <b>accessible websites</b>.</p>
    </div>
    <div class="box-tabs">
      <div class="container">
        <b-card no-body>
          <b-tabs pills card>
            <b-tab title="Business Model" active>
              <h5>Version 1.1</h5>
              <br>
              <hr style="margin: 30px 0;">
              <h5>Version 1.0</h5>
              <br>
              <img src="/blog.jpg" alt="Business Model Canvas" style="width:100%;">
            </b-tab>
            <b-tab title="Elevator Pitch">
              <p>"Ordent helps small, medium businesses, and also organizations that have no online presence to design and build their online strategy that is better than most of software agencies because we provide maintenance services, localization support, and cloud management services for hosting".</p>
            </b-tab>
            <b-tab title="User Persona & Empathy Map">
              <p>In this section, I will focus with one of my customer segment, Non-Profit Organization.</p>
              <h5>User Persona</h5>
              <h5>Empathy Map</h5>
            </b-tab>
            <b-tab title="Customer Journey">

            </b-tab>
            <b-tab title="Interview Script">

            </b-tab>
            <b-tab title="Survey Script">

            </b-tab>
            <b-tab title="More to come..." disabled>

            </b-tab>
          </b-tabs>
        </b-card>
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
  .box-description{
    font-family: 'Raleway', sans-serif;
    h1{
      font-weight: 700;
    }
    h1,h2,h3,h4,h5{
      color: #333;
    }
    p{
      letter-spacing: 0.4px;
    }
  }

  .box-tagline{
    background: url('/bg.jpg') no-repeat fixed center;
    background-size: cover;
    font-family: 'Raleway', sans-serif;
    h1, h2, h3, h4, h5, p{
      color: #fff;
    }
  }

  .box-tabs{
    padding: 20px 0 100px 0;
    .nav{
      .nav-item{
        a{
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
    .tab-pane{
      padding: 30px 30px;
      p{
        font-family: 'Raleway', sans-serif;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0.8px;
        line-height: 30px;
      }
    }
  }

  .footer{
    background: #333;
    font-family: 'Raleway', sans-serif;
    padding: 15px 0;
    text-align: center;
    p{
      color: #fff;
      font-size: 14px;
      margin: 0 0;
    }
  }

  @media (max-width: 576px) {
    .box-tagline{
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
    .box-tagline{
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
    .box-tagline{
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
    .box-tagline{
      padding: 200px 0;
      h1{
        font-size: 80px;
        font-weight: 700;
      }
    }

    .box-description{
      padding: 150px 100px;
      p{
        font-size: 22px;
      }
    }
  }

  .logo-temporary{
    max-width: 200px;
  }
</style>
