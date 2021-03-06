<template>
  <v-container class="body">
    <nav class="navbar">
      <a
        href="/"
        class="link link-img"
        :class="$vuetify.theme.dark ? 'link-dark' : 'link-light'"
        color="primary"
      >
        <img src="../assets/logo.png" alt="">
      </a>
      <ul class="nav-items">
        <li>
          <a href="#/dashboard">World</a>
        </li>
        <li>
          <a href="#/countries">Countries</a>
        </li>
        <li>
          <a href="#/news">News</a>
        </li>
      </ul>
    </nav>
    <section class="hero">
      <v-layout wrap align-center class="text-center text-lg-left">
        <v-flex sm12 md7>
          <h1
            class="red--text display-2 font-weight-black my-3"
          >Covid-19</h1>
          <h2
            class="black--text display-1 font-weight-bold text-capitalize"
          >Stay home isolated and quarantined</h2>
          <p class="title font-weight-regular">
            All have been advised to stay at home and quarantined.
            This is because of the 2019 Corona virus disease referred
            to as covid-19. Around the globe it's on a ravaging rampage.
            During this time defending ourselves and others goes beyond
            just your loved ones. It is a moment in which we need to work
            together to defend our biodiversity.
          </p>
        </v-flex>
        <v-flex sm12 md5>
          <img class="hero__img" src="@/assets/home/hero.png" alt="">
        </v-flex>
      </v-layout>
    </section>

    <section class="what text-center">
      <h2 class="red--text headline font-weight-black">What is COVID-19</h2>
      <p class="title font-weight-regular my-sm-5 my-md-7">
        According to Nigeria Centre for Disease Control (NCDC) 2020 reports,
        Coronavirus disease (COVID-19) is an infectious disease caused by a new
        virus. The disease causes respiratory illness (like the flu) with symptoms
        such as a cough, fever, and in more severe cases, difficulty breathing.
        You can protect yourself by washing your hands frequently, avoiding
        touching your face, and avoiding close contact (1 meter or 3 feet)
        with people who are unwell.
      </p>
    </section>

    <section class="how text-center">
      <h2 class="red--text headline font-weight-black">How Does It Spread</h2>
      <p class="title font-weight-regular my-sm-5 my-md-7">
        COVID-19 is a new disease and we continue to learn how it spreads,
        the nature of the disease it causes and the degree to which it can
        spread in the Federal Republic of Nigeria
      </p>
      <v-layout justify-space-between row wrap>
        <v-flex sm12 md3 class="spread text-center">
          <img src="@/assets/home/contaminated.png" alt="">
          <p class=" headline font-weight-medium">Contaminated objects and substances</p>
          <p class="subtitle-1 font-weight-regular">
            Flu viruses may cause mild to severe illness.
            Learn about common symptoms and complications.
          </p>
        </v-flex>
        <v-flex sm12 md3 class="spread text-center">
          <img src="@/assets/home/Droplets.png" alt="">
          <p class=" headline font-weight-medium">Air Transmission of Droplets</p>
          <p class="subtitle-1 font-weight-regular">
            There are a number of tests available to detect
            influenza viruses.
          </p>
        </v-flex>
        <v-flex sm12 md3 class="spread text-center">
          <img src="@/assets/home/transmission.png" alt="">
          <p class=" headline font-weight-medium">Contaminated objects and substances</p>
          <p class="subtitle-1 font-weight-regular">
            Flu viruses may cause mild to severe illness.
            Learn about common symptoms and complications.
          </p>
        </v-flex>
      </v-layout>
    </section>

    <section class="symptoms text-center text-md-left">
      <v-layout class="row wrap justify-space-between align-center">
        <v-flex sm12 md6>
          <img src="@/assets/home/symptoms.png" alt="">
        </v-flex>
        <v-flex sm12 md5>
          <h2 class="red--text headline font-weight-black">
            Symptoms of coronavirus
          </h2>
          <p>
            Those infected with COVID-19 may have symptoms that are small to no.
            You may not know that you have COVID-19 symptoms, as they are similar
            to a cold or flu.
          </p>
          <p>
            Symptoms may take up to 14 days to develop after
            exposure to COVID-19. This is the longest known contagious period
            for this disease. Experts are currently investigating whether the
            virus can be transmitted to others if someone does not show symptoms
            while believing that it is possible to do so is considered to be
            less common.
          </p>
          <p>Symptoms have included</p>
          <v-layout
            row
            wrap
            class="align-start flex-column flex-sm-row justify-sm-start justify-md-space-between"
          >
            <v-flex xs12 sm4 md6 class="symptom">
              <img src="@/assets/home/check.svg" alt="">
              Fever
            </v-flex>
            <v-flex xs12 sm4 md6 class="symptom">
              <img src="@/assets/home/check.svg" alt="">
              Cough
            </v-flex>
            <v-flex xs12 sm4 md6 class="symptom">
              <img src="@/assets/home/check.svg" alt="">
              Difficulty Breathing
            </v-flex>
            <v-flex xs12 sm4 md6 class="symptom">
              <img src="@/assets/home/check.svg" alt="">
              Weakness
            </v-flex>
            <v-flex xs12 sm4 md6 class="symptom">
              <img src="@/assets/home/check.svg" alt="">
              Sore Throat
            </v-flex>
            <v-flex xs12 sm4 md6 class="symptom">
              <img src="@/assets/home/check.svg" alt="">
              Headache
            </v-flex>
          </v-layout>
          <p>In severe cases, infection can lead to death.</p>
        </v-flex>
      </v-layout>
    </section>
  </v-container>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
// Variable declarations
$black: #4F4F4F;
$red: #C12D25;

.body {
  color: $black;
}

.red--text {
  color: $red;
}

.black--text {
  color: $black;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  z-index: 1;
  background-color: #fff;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);
  @media only screen and (min-width: 768px) {
    padding: 20px 40px;
  }
  .link-img {
    img {
      width: 40px;
    }
  }
  .nav-items {
    padding: 0;
    list-style-type: none;
    li {
      display: inline;
      margin: 0 20px;
      a {
        color: $black;
        text-decoration: none;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }

}
.hero {
  padding-top: 80px;
  min-height: calc(100vh - 100px);
  @media only screen and (min-width: 960px) {
    padding-top: 150px;
  }
  &__img {
    width: 80%;
    @media only screen and (min-width: 960px) {
      width: 100%;
    }
  }
  p {
    width: 80%;
    margin: 20px auto;
    @media only screen and (min-width: 960px) {
      margin: 20px 0;
    }
  }
}

.what {
  margin-top: 100px;
}

.what,
.how,
.symptoms {
  margin-bottom: 50px;
  p {
    width: 80%;
    margin: 20px auto;
    @media only screen and (min-width: 960px) {
      width: 100%;
      margin: 20px 0;
    }
  }
  @media only screen and (min-width: 960px) {
    margin-bottom: 100px;
  }
}

.spread img {
  height: 100px;
}

.symptoms {
  img  {
    width: 500px;
    max-width: 80%;
    margin-bottom: 50px;
  }
  @media only screen and (min-width: 960px) {
    img {
      width: 100%;
    }
  }
  .align-start {
    width: 200px;
    margin: 0 auto;
    @media only screen and (min-width: 600px) {
      width: 100%;
    }
  }
  .symptom {
    margin: 5px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img {
      margin: 0 10px;
      width: 20px;
    }
  }
}
</style>
