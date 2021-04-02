<template>
  <div class="flex">
    <svg
      class="flex-1 canvas-mobile md:hidden"
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
          <nuxt-link class="block pb-1 mb-12" to="/audience-research">
            <span class="inline-block border-blue-400 border-b-3">
              Audience Research
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
    <div class="absolute inset-0 pointer-events-none" style="mix-blend-mode: multiply">
      <div class="absolute w-12 h-12 rounded-full -bottom-6 right-10" style="background-color: #65D8B4; mix-blend-mode: multiply"></div>
      <div class="absolute bottom-10 right-24 h-2.5 w-2.5 rounded-full bg-blue-500" style="mix-blend-mode: multiply"></div>

      <div class="absolute rounded-md top-56 -left-10 w-14 h-14" style="background-color: #4F77FF"></div>
      <div class="absolute w-4 h-4 bg-blue-500 rounded-full left-2" style="top: 16.9rem; mix-blend-mode: multiply"></div>

      <div class="absolute rounded-md -bottom-8 -left-8 w-14 h-14" style="background-color: #DF5FBE"></div>
      <div class="absolute left-2.5 bottom-2.5 h-6 w-6 rounded-full bg-blue-500" style="mix-blend-mode: multiply"></div>

      <div class="absolute bottom-40 -right-1.5 w-8 h-8 rounded-md" style="background-color: #966CE0"></div>
      <div class="absolute w-6 h-6 bg-blue-500 rounded-full bottom-44 -right-3" style="mix-blend-mode: multiply"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
