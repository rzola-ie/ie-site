<template>
<div>
  <img class="w-screen fixed right-0 left-0 top-0 bottom-0 hidden md:block" src="/images/bracket-bg.svg" alt="Background Image">
  <div class="absolute z-0">
    <svg
        class="canvas-mobile flex-1 md:hidden"
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

    <svg class="my-8 md:hidden" width="100vw" height="105px" viewBox="0 0 139 105" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="IE_mobile_Contact" transform="translate(-118.000000, -116.000000)">
                <g id="hero-Icon" transform="translate(118.000000, 116.000000)">
                    <path d="M25.7267473,39.394698 C35.4858118,39.4990786 41.3239639,37.1988866 41.6074398,28.8968101 L41.6285947,26.7258209 C48.4592145,16.7517454 66.3750098,18.9946553 70.1333315,18.460023 C73.8801692,19.0748502 91.8358566,17.2157299 98.4724556,27.3336469 L98.4513007,29.5052726 C98.5746036,37.8111679 104.367424,40.235471 114.126488,40.3398516 C122.804234,40.4327758 129.889922,41.985119 129.957013,35.0571749 L129.998719,30.7139236 C130.050699,25.390513 128.517875,20.508174 125.975054,16.8230297 C125.976263,16.8223932 120.164705,6.69047387 106.042289,2.28548526 C102.308748,1.12075051 98.4760822,0.56447829 94.6325363,0.52310793 L70.3086151,0.262792897 L45.9846939,0.00247786421 C42.1411481,-0.0388924956 38.2988111,0.436548408 34.542907,1.5210883 C20.3388927,5.62248212 14.3333146,15.628381 14.3333146,15.628381 C11.7209848,19.2587892 10.094474,24.1073953 10.0430978,29.4308059 L10.0013924,33.7740573 C9.9343011,40.7020013 17.0490012,39.3017738 25.7267473,39.394698 L14.3333146,42" id="Fill-3" fill="#EFCB57" style="mix-blend-mode: multiply;"></path>
                    <path d="M35.9207952,41 L105.66565,41 C109.267262,41 112.522059,43.147171 113.939428,46.4581637 L133.631094,92.4581637 C135.587197,97.0276449 133.468634,102.317675 128.899153,104.273778 C127.77982,104.752941 126.574898,105 125.357317,105 L14.2020452,105 C9.23148246,105 5.2020452,100.970563 5.2020452,96 C5.2020452,94.6712558 5.49626222,93.3589957 6.0635702,92.1574456 L27.7823202,46.1574456 C29.269009,43.0086601 32.4386848,41 35.9207952,41 Z" id="Rectangle" fill="#EFCB57" style="mix-blend-mode: multiply;"></path>
                    <circle id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="69.5" cy="48.5" r="22.5"></circle>
                </g>
            </g>
        </g>
    </svg>
    <div class="relative ml-32 md:bg-transparent md:mt-40 md:w-4/12">
      <h1 class="text-3xl tracking-wide leading-normal text-ie-purple mb-4">
        Careers
      </h1>
      <p class="mr-10 mb-4 text-base leading-normal text-gray-600 pb-6 text-xl">
        We are always on the lookout for talented marketers, software engineers, designers and regulatory specialists.
      </p>
      <a class="text-base text-gray-600 border-b-2 border-blue-300 text-xl" href="mailto:press1for@idea-evolver.com">careers@idea-evolver.com</a>
    </div>

  </div>

    <svg class="hidden md:block absolute -bottom-2 z-2" width="100vw" height="345px" viewBox="0 0 363 345" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="IE_desktop_Careers" transform="translate(-905.000000, -686.000000)">
                <g id="Copy" transform="translate(239.000000, 342.000000)">
                    <g id="BigIcon-" transform="translate(666.000000, 344.000000)">
                        <path d="M175,155 L188,155 C189.104569,155 190,155.895431 190,157 L190,515 C190,516.104569 189.104569,517 188,517 L175,517 C173.895431,517 173,516.104569 173,515 L173,157 C173,155.895431 173.895431,155 175,155 Z" id="Rectangle" fill="#D85CB8" style="mix-blend-mode: multiply;" transform="translate(181.500000, 336.000000) scale(-1, 1) rotate(270.000000) translate(-181.500000, -336.000000) "></path>
                        <rect id="Rectangle" fill="#DF5FBE" style="mix-blend-mode: multiply;" x="0" y="68" width="362" height="242" rx="10"></rect>
                        <ellipse id="Oval" fill="#4BBFE1" style="mix-blend-mode: multiply;" cx="181.5" cy="73" rx="73.5" ry="73"></ellipse>
                    </g>
                </g>
            </g>
        </g>
    </svg>
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