<template>
  <div id="app">
    <nav ref="nav">
      <div class="wrapper container-fluid">
        <div class="col-sm-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
        </div>
      </div>
    </nav>
    <div class="background" />
    <header ref="header">
      <div class="wrapper container-fluid">
        <div class="col-sm-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
          <div class="flex-center">
            <div class="text-wrapper">
              <h1 v-scroll-reveal.reset="reveal" class="a secondary">Get Up</h1>
              <h1 v-scroll-reveal.reset="reveal" class="b secondary margin">Rise Up</h1>
              <h1 v-scroll-reveal.reset="reveal" class="c">Direct</h1>
              <h1 v-scroll-reveal.reset="reveal" class="d">Action</h1>
              <h1 v-scroll-reveal.reset="reveal" class="e">Fund</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <article>
      <div class="wrapper container-fluid">
        <div class="col-sm-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
          <section v-for="(section, index) in content.sections"
                   :key="index"
                   :id="slugify(section.title)">
            <div v-html="markdown(section.content)" />
          </section>
        </div>
      </div>
    </article>
    <footer>
      <div class="inner">
        <div class="wrapper container-fluid">
          <div class="col-sm-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
            <a href="https://beautifultrouble.org" target="_blank"><div v-scroll-reveal.reset="reveal" class="logo logo-bt" /></a>
            <a href="https://africans-rising.org" target="_blank"><div v-scroll-reveal.reset="reveal" class="logo logo-ar" /></a>
            <p>The Get Up Rise Up Direct Action Fund is a partnership between Beautiful Trouble and Africans Rising.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Headroom from 'headroom.js'
import content from './content.aml'

export default {
  data: () => ({
    content: content,
    reveal: {origin: 'bottom', scale: .5, duration: 200, distance: '100px', opacity: 0},
  }),
  components: {
  },
  methods: {
  },
  mounted() {
    let headroom = new Headroom(this.$refs.nav)
    headroom.init()
  }
}
</script>

<style lang="scss">
// Breakpoints
@import 'breakpoint-sass/stylesheets/_breakpoint.scss';
$lg_width: 1280px;
$md_width: 960px;
$sm_width: 0px; // real min-width might be 480px
$lg: $lg_width;
$md: $md_width $lg_width - 1px;
$sm: $sm_width $md_width - 1px;
$upper: $md_width;
$lower: $sm_width $lg_width - 1px;

// Grid system
$outer-margin: 30px;
$gutter-width: 15px;
$breakpoints:
    sm 0px $md_width - 1px,
    md $md_width $lg_width - 1px,
    lg $lg_width 10000px;
$flexboxgrid-max-width: 1280px - $gutter-width;
@import 'flexboxgrid-sass/flexboxgrid.scss';

// Theme
@import url('https://fonts.googleapis.com/css?family=Cabin+Sketch:700|Londrina+Solid:900|Roboto:400');

$nav-height: 2.5rem + 1rem;

$primary: #41bad5;
$dark: #333333;
$med: #adadad;
$light: #f5f5f5;
$accent: #94ca86;
$text: #222222;


// Utilities
@function tint($color, $percentage) {
  @return mix(white, $color, $percentage);
}
@function shade($color, $percentage) {
  @return mix(black, $color, $percentage);
}
.show-sm {
  @include breakpoint($upper) {
    display: none;
  }
}
.show-upper {
  @include breakpoint($sm) {
    display: none;
  }
}
.flex-center {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.db { display: block; }
.dib { display: inline-block; vertical-align: top; }



html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0 auto;
  background: white;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text;
}
h1, h2, h3 {
  font-family: 'Cabin Sketch', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-style: normal;
  line-height: .9;
}
h1 {
  line-height: 75%;
  text-transform: uppercase;
  font-size: 6rem;
  @include breakpoint($sm) {
    font-size: 4rem;
  }
}
h2 {
  font-size: 3rem;
  margin: 1rem 0;
  @include breakpoint($sm) {
    font-size: 2rem;
  }
}
a {
  text-decoration: none;
  font-weight: bold;
  color: $dark;
  cursor: pointer;
}
nav {
  height: $nav-height - 1rem;
  background: black;
  transform: translate3d(0, 0, 0);
  transition: all .1s ease-in-out;
  z-index: 999;

  &.headroom {
    position: fixed;
    top: 0; 
    left: 0; right: 0;
    @include breakpoint($upper) {
      &--unpinned {
        transform: translate3d(0, -75%, 0);
      }
    }
  }
  &:after {
    content: " ";
    position: absolute;
    top: $nav-height - 1rem;
    height: 1rem;
    left: 0; right: 0;
    background-image: url(./bt-gradient.jpg);
    background-size: contain;
    z-index: 1;
  }
}
.background {
  width: 100%;
  padding-top: 50%;
  background-image: url(./background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 0%;
  position: fixed;
  top: 0;
  z-index: -1;
  @include breakpoint($sm) {
    padding-top: 100%;
  }
  &:after {
    content: " ";
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
    position: absolute;
    top: 0; left: 0;
    bottom: 0; right: 0;
  }
}
header {
  padding-top: $nav-height + 3rem;
  padding-bottom: 2rem;
  .text-wrapper  {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    @include breakpoint($upper) {
      position: relative;
      right: 3rem;
    }      
  }
  h1 {
    margin: 0;
    text-align: right;
    &.margin {
      margin-bottom: .5rem;
    }
    &.secondary {
      font-family: 'Londrina Solid', Helvetica, Arial, sans-serif;
      line-height: 82%;
    }
    @include breakpoint($sm) {
      font-size: 5rem;
    }
  }

}
article {
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
  padding-bottom: 3rem;
  h1 {
    text-align: center;
  }
  a.apply {
    background: $accent;
    color: white;
    display: inline-block;
    padding: 1rem 2rem;
    border-radius: .5rem;
    margin: 1rem 0;
    transition: all .1s ease-in-out;
    @include breakpoint($upper) {
      &:hover {
        background: $primary;
      }
    }
    @include breakpoint($sm) {
      display: block;
      text-align: center;
      margin: 1rem 0;
    }
  }
}
footer {
  padding-bottom: 3rem;
  background-image: url(./bt-gradient.jpg);
  background-size: contain;
  color: white;
  .inner {
    position: relative;
    top: 1rem;
    background-color: rgba(255, 255, 255, .2);
    padding: 1rem;
  }
  .logo {
    background-size: contain;
    background-repeat: no-repeat;
    max-width: 50%;
    width: 50%;
    display: inline-block;
    vertical-align: bottom;
    @include breakpoint($sm) {
      max-width: 100%;
      width: 100%;
      margin-bottom: 1rem;
    }
  }
  .logo-ar { 
    background-image: url(./logo-ar.png); 
    padding-top: 25%;
    position: relative;
    top: 1rem;
  }
  .logo-bt { 
    background-image: url(./logo-bt.png); 
    padding-top: 25%;
    @include breakpoint($sm) {
      padding-top: 50%;
    }
  }
  p {
    font-size: .75rem;
  }
}
</style>
