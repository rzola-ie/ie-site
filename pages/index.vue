<template>
<div class="fade-in">
  <div class="flex initial h-screen">
    <svg
      class="flex-1 canvas-mobile lg:hidden"
      :viewBox="`0 0 800 1200`"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMin meet"

    >
    <defs>
      <filter id="dropshadow" height="130%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="5"/> <!-- stdDeviation is how much to blur -->
        <feOffset dx="2" dy="2" result="offsetblur"/> <!-- how much to offset -->
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.1"/> <!-- slope is the opacity of the shadow -->
        </feComponentTransfer>
        <feMerge> 
          <feMergeNode/> <!-- this contains the offset blurred image -->
          <feMergeNode in="SourceGraphic"/> <!-- this contains the element that the filter is applied to -->
        </feMerge>
      </filter>

      <g id="brackets">
        <path d="M108.78 0h26.51a21 21 0 0 120.08 27.16l-86.78 283A21 21 0 0 148.52 325H22a21 21 0 0 1-20.08-27.16l86.78-283A21 21 0 0 1108.78 0z" />
        <path d="M158.29 0h-51.62a9 9 0 0 0-9 9 9.12 9.12 0 0 0.39 2.64l94.14 307a9 9 0 008.6 6.36h51.62a9 9 0 0 09-9 9.12 9.12 0 0 0-.39-2.64l-94.14-307a9 9 0 00-8.6-6.36z" />
      </g>
    </defs>

    <g style="transform: scale(4) translate(45px, 1px);" fill="white" filter="url(#dropshadow)">
      <use id="top" href="#brackets" />
      <use id="bottom" href="#brackets" style="transform: scale(1, -1) translate(0, 545px); transform-origin: center" />
    </g>

      <foreignObject
        height="365"
        width="681"
        x="92"
        y="90"
      >
        <h1 class="text-5xl leading-normal tracking-wide text-ie-purple">
          Audience marketing and software solutions that transform engagement and bring brands into digital harmony.
        </h1>
      </foreignObject>

      <foreignObject
        x="88"
        y="520"
        width="681"
        height="280"
      >
        <nav class="py-3 text-4xl leading-none text-gray-600">
          <nuxt-link class="block pb-1 mb-12" to="/search-behavior-analysis">
            <span class="inline-block border-blue-400 border-b-3">
              Search Behavior Analysis
            </span>
            <span><img class="inline-block w-12 h-12 ml-4" src="/images/arrow-right-double.svg" alt="arrow icon" /></span>
          </nuxt-link>
          <nuxt-link
            class="block pb-1 mb-12 leading-none"
            to="/software-development">
            <span class="inline-block border-blue-400 border-b-3">
              Software Development
            </span>
            <span><img class="inline-block w-12 h-12 ml-4" src="/images/arrow-right-double.svg" alt="arrow icon" /></span>
          </nuxt-link>
          <nuxt-link
            class="block pb-1 leading-none"
            to="/search-experience-marketing">
            <span class="inline-block border-blue-400 border-b-3">
              Search Experience Marketing
            </span>
            <span><img class="inline-block w-12 h-12 ml-4" src="/images/arrow-right-double.svg" alt="arrow icon" /></span>
          </nuxt-link>
        </nav>
      </foreignObject>

      <foreignObject
        x="90"
        y="870"
        width="681"
        height="200"
      >
        <h2 class="text-6xl leading-snug text-ie-purple">Evolve<br>Responsively.</h2>
      </foreignObject>
    </svg>

    <div class="hidden lg:block xl:block m-20 pl-24 md:pl-16 md:m-12 md:mt-24 lg:mt-16 lg:ml-16 xl:mt-20 xl:ml-32">
      <h1 class="text-4xl md:text-2xl lg:text-3xl xl:text-4xl xl:leading-relaxed tracking-wide text-purple-900 w-2/4 md:w-3/4 lg:w-3/4 xl:w-2/4">
        Audience marketing and software solutions that transform engagement and bring brands into digital harmony.
      </h1>
        <nav class="py-3 text-2xl ml-24 md:ml-0 lg:ml-16 lg:text-xl xl:ml-24 xl:text-xl leading-none my-14 lg:my-8 xl:my-10 text-gray-600">
          <nuxt-link
            class="block pb-1 mb-6 hover:text-gray-500 transition ease-in duration-150 menu-link"
            to="/search-behavior-analysis">
              Search Behavior Analysis
            <img class="inline-block w-8 h-8 ml-4" src="/images/arrow-right-double.svg" alt="arrow icon" />
            <svg width="280px" height="2px" viewBox="0 0 323 2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="IE_desktop_Home" transform="translate(-341.000000, -543.000000)" fill="#4BBFE1">
                        <g id="Copy" transform="translate(240.000000, 239.000000)">
                            <g id="List" transform="translate(101.000000, 254.000000)">
                                <g id="Group" transform="translate(0.558824, 0.857143)">
                                    <rect id="Rectangle" x="0" y="50" width="322" height="1"></rect>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
          </nuxt-link>
          <nuxt-link
            class="block pb-1 mb-6 leading-none hover:text-gray-500 transition ease-in duration-150 menu-link"
            to="/software-development">
            <span class="inline-block">
              Software Development
            </span>
            <span><img class="inline-block w-8 h-8 ml-4" src="/images/arrow-right-double.svg" alt="arrow icon" /></span>
          <svg width="265px" height="1px" viewBox="0 0 304 1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="IE_desktop_Home" transform="translate(-342.000000, -622.000000)" fill="#4BBFE1">
                      <g id="Copy" transform="translate(240.000000, 239.000000)">
                          <g id="List" transform="translate(101.000000, 254.000000)">
                              <g id="2" transform="translate(1.000000, 78.000000)">
                                  <rect id="Rectangle" x="0" y="51" width="304" height="1"></rect>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </svg>
          </nuxt-link>
          <nuxt-link
            class="block pb-1 leading-none hover:text-gray-500 transition ease-in duration-150 menu-link"
            to="/search-experience-marketing">
            <span class="inline-block">
              Search Experience Marketing
            </span>
            <span><img class="inline-block w-8 h-8 ml-4" src="/images/arrow-right-double.svg" alt="arrow icon" /></span>

          <svg width="325px" height="1px" viewBox="0 0 370 1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="IE_desktop_Home" transform="translate(-341.000000, -700.000000)" fill="#4BBFE1">
                      <g id="Copy" transform="translate(240.000000, 239.000000)">
                          <g id="List" transform="translate(101.000000, 254.000000)">
                              <g id="3" transform="translate(0.000000, 157.000000)">
                                  <rect id="Rectangle" transform="translate(185.000000, 50.500000) scale(1, -1) translate(-185.000000, -50.500000) " x="0" y="50" width="370" height="1"></rect>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </svg>
          </nuxt-link>
        </nav>
        <h2 class="text-4xl md:text-3xl lg:text-3xl xl:text-4xl leading-snug text-ie-purple">Evolve Responsively.</h2>
    </div>
    <div ref="anime-1" class="absolute inset-0 pointer-events-none anime-1" style="mix-blend-mode: multiply">
      <div ref="anime-2" class="absolute w-12 h-12 rounded-full -bottom-6 right-10 xl:right-100 anime-2" style="background-color: #65D8B4; mix-blend-mode: multiply"></div>
      <div ref="anime-3" class="absolute bottom-10 right-24 h-2.5 w-2.5 rounded-full bg-blue-500 xl:right-108 anime-3" style="mix-blend-mode: multiply"></div>

      <div ref="anime-4" class="absolute rounded-xl top-56 -left-10 w-14 h-14 anime-4" style="background-color: #4F77FF"></div>
      <div ref="anime-5" class="absolute w-4 h-4 bg-blue-500 rounded-full left-2 anime-5" style="top: 16.9rem; mix-blend-mode: multiply"></div>

      <div ref="anime-6" class="absolute rounded-xl -bottom-8 -left-8 w-14 h-14 anime-6" style="background-color: #DF5FBE"></div>
      <div ref="anime-7" class="absolute left-2.5 bottom-2.5 h-6 w-6 rounded-full bg-blue-500 anime-7" style="mix-blend-mode: multiply"></div>

      <div ref="anime-8" class="xl:hidden absolute bottom-40 -right-1.5 w-8 h-8 rounded-xl anime-8" style="background-color: #966CE0"></div>
      <div ref="anime-9" class="xl:hidden absolute w-6 h-6 bg-blue-500 rounded-full bottom-44 -right-3 anime-9" style="mix-blend-mode: multiply"></div>


    <svg class="hidden xl:block absolute hidden xl:block bottom-96 right-32" width="60px" height="68px" viewBox="0 0 60 68" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="IE_desktop_Home" transform="translate(-1670.000000, -581.000000)">
                <g id="graphic-elements" transform="translate(-30.000000, 249.000000)">
                    <ellipse id="Oval" fill="#4BBFE1" cx="1731.5" cy="349.5" rx="16.5" ry="17.5"></ellipse>
                    <rect id="Rectangle" fill="#966CE0" style="mix-blend-mode: darken;" x="1700" y="352" width="60" height="48" rx="4"></rect>
                </g>
            </g>
        </g>
    </svg>
    </div>
  </div>
</div>
</template>

<script>
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";

gsap.registerPlugin(ExpoScaleEase, RoughEase, SlowMo);
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default {
  layout: "default",
  mounted() {
    gsap.fromTo(".anime-1", {
      autoAlpha: 0, 
      opacity: .7,
      scale: .6,
      }, {
      duration: .4,
      autoAlpha: 1, 
      scale: 1,
      opacity: 1,
      yoyo: true,
      ease: "expo",
    });
    gsap.fromTo(".anime-2", {
      autoAlpha: 0, 
      opacity: .7,
      scale: .6,
      }, {
      duration: .4,
      delay: .5,
      autoAlpha: 1, 
      scale: 1,
      opacity: 1,
      yoyo: true,
      ease: "expo",
    });
    gsap.fromTo(".anime-3", {
      autoAlpha: 0, 
      opacity: .7,
      scale: .6,
      }, {
      duration: .4,
      delay: .8,
      autoAlpha: 1, 
      scale: 1,
      opacity: 1,
      yoyo: true,
      ease: "expo",
    });
    gsap.fromTo(".anime-4", {
      autoAlpha: 0, 
      opacity: .7,
      scale: .6,
      }, {
      duration: .4,
      delay: 1,
      autoAlpha: 1, 
      scale: 1,
      opacity: 1,
      yoyo: true,
      ease: "expo",
    });
    gsap.fromTo(".anime-5", {
      autoAlpha: 0, 
      opacity: .7,
      scale: .6,
      }, {
      duration: .4,
      delay: 1.2,
      autoAlpha: 1, 
      scale: 1,
      opacity: 1,
      yoyo: true,
      ease: "expo",
    });
    gsap.fromTo(".anime-6", {
      autoAlpha: 0, 
      opacity: .7,
      scale: .6,
      }, {
      duration: .4,
      delay: 1.4,
      autoAlpha: 1, 
      scale: 1,
      opacity: 1,
      yoyo: true,
      ease: "expo",
    });
    gsap.fromTo(".anime-7", {
      autoAlpha: 0, 
      opacity: .7,
      scale: .6,
      }, {
      duration: .4,
      delay: 1.5,
      autoAlpha: 1, 
      scale: 1,
      opacity: 1,
      yoyo: true,
      ease: "expo",
    });
    gsap.fromTo(".anime-8", {
      autoAlpha: 0, 
      opacity: .7,
      scale: .6,
      }, {
      duration: .4,
      delay: 1.6,
      autoAlpha: 1, 
      scale: 1,
      opacity: 1,
      yoyo: true,
      ease: "expo",
    });
  }
};
</script>

<style scoped>
.menu-link:hover img {
  transform: translate(10px, 0%);
  transition: .3s all;
  opacity: .8;
}

.menu-link img {
  transition: .3s;
}
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
