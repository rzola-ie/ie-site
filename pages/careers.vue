<template>
<div>
  <div class="absolute z-0">
    <svg
        class="canvas-mobile flex-1"
        :viewBox="`0 0 800 2000`"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMin meet"
      >
        <defs>
          <filter id="dropshadow" height="130%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
            <!-- stdDeviation is how much to blur -->
            <feOffset dx="2" dy="2" result="offsetblur" />
            <!-- how much to offset -->
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.1" />
              <!-- slope is the opacity of the shadow -->
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <!-- this contains the offset blurred image -->
              <feMergeNode in="SourceGraphic" />
              <!-- this contains the element that the filter is applied to -->
            </feMerge>
          </filter>

          <g id="brackets">
            <path
              d="M108.78 0h26.51a21 21 0 0 120.08 27.16l-86.78 283A21 21 0 0 148.52 325H22a21 21 0 0 1-20.08-27.16l86.78-283A21 21 0 0 1108.78 0z"
            />
            <path
              d="M158.29 0h-51.62a9 9 0 0 0-9 9 9.12 9.12 0 0 0.39 2.64l94.14 307a9 9 0 008.6 6.36h51.62a9 9 0 0 09-9 9.12 9.12 0 0 0-.39-2.64l-94.14-307a9 9 0 00-8.6-6.36z"
            />
          </g>

          <pattern
            id="dots4"
            viewBox="0,0,90,90"
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
          </pattern>
        </defs>

        <g
          style="transform: scale(4) translate(45px, 1px)"
          fill="white"
          filter="url(#dropshadow)"
        >
          <use id="top" href="#brackets" />
          <use
            id="bottom"
            href="#brackets"
            style="
              transform: scale(1, -1) translate(0, 545px);
              transform-origin: center;
            "
          />
        </g>
    </svg>
  </div>
  <div class="relative justify-items-center z-1">

    <svg class="my-8" width="100vw" height="106px" viewBox="0 0 108 106" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="IE_mobile_Careers" transform="translate(-134.000000, -116.000000)">
                <g id="Hero-icon" transform="translate(134.000000, 116.000000)">
                    <ellipse id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="55" cy="22.5" rx="22" ry="22.5"></ellipse>
                    <path d="M54,50 L55,50 C56.1045695,50 57,50.8954305 57,52 L57,155 C57,156.104569 56.1045695,157 55,157 L54,157 C52.8954305,157 52,156.104569 52,155 L52,52 C52,50.8954305 52.8954305,50 54,50 Z" id="Rectangle" fill="#D85CB8" style="mix-blend-mode: multiply;" transform="translate(54.500000, 103.500000) scale(-1, 1) rotate(270.000000) translate(-54.500000, -103.500000) "></path>
                    <rect id="Rectangle" fill="#DF5FBE" style="mix-blend-mode: multiply;" x="0" y="21" width="107" height="72" rx="6"></rect>
                </g>
            </g>
        </g>
    </svg>
    <h1 class="text-3xl tracking-wide leading-normal text-ie-purple mb-4 ml-8">
      Careers
    </h1>
    <p class="ml-8 mr-10 text-base leading-normal text-gray-600 pb-6">
      We are always on the lookout for talented marketers, software engineers, designers and regulatory specialists.
    </p>
    <a class="text-base text-gray-600 ml-8 border-b-2 border-blue-300" href="mailto:careers@idea-evolver.com">careers@idea-evolver.com</a> 
  </div>
  <!-- #efefef url(//ideaevolver.com/wp-content/themes/idea-evolver/assets-img/service-background-pattern.svg) center -5px/100% repeat -->
  <!-- style="background: #efefef url('/images/background-pattern.svg') center -5px/100% repeat" -->
  <!-- class="bg-stripes bg-repeat bg-center bg-gray-200" -->
</div>
</template>

<script>
export default {
  layout: "default",
};
</script>

<style lang="scss" scoped>
</style>