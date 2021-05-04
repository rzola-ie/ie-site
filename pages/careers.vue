<template>
<div class="fade-in">
  <div class="flex initial h-screen">
    <svg
    class="flex-1 canvas-mobile absolute z-behind md:hidden m-0 p-0"
    :viewBox="`0 0 800 2000`"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMin meet"

    >
      <defs>
      <filter id="dropshadow" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
          <feOffset dx="2" dy="2" result="offsetblur"/>
          <feComponentTransfer>
          <feFuncA type="linear" slope="0.13"/>
          </feComponentTransfer>
          <feMerge> 
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
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
      </svg>
    <div class="relative justify-items-center z-1 md:mt-12" style="mix-blend-mode: multiply;">
      <svg
      class="flex-1 canvas-mobile absolute z-behind md:hidden"
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
      </svg>
      <svg class="my-8 md:h-40 xl:hidden" width="100vw" height="106px" viewBox="0 0 108 106" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="mix-blend-mode: multiply;">
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
      <div class="mx-4 relative xl:ml-32 md:ml-20 xl:pl-12 xl:py-32 xl:bg-transparent md:w-3/5 xl:w-2/5">
        <h1 class="text-3xl xl:text-5xl tracking-wide leading-normal text-ie-purple mb-4 ml-8 xl:mb-8">
          Careers
        </h1>
        <p class="ml-8 mr-10 mb-4 text-xl leading-normal text-gray-600 pb-6 md:w-4/5">
          We are always on the lookout for talented marketers, software engineers, designers and regulatory specialists.
        </p>
        <a class="text-base text-gray-600 border-b-2 border-blue-300 text-xl ml-8" href="mailto:careers@ideaevolver.com">careers@ideaevolver.com</a>
      </div>

    </div>

    <svg class="hidden xl:block absolute -bottom-2 z-2" width="100vw" height="345px" viewBox="0 0 363 345" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="mix-blend-mode: multiply;">
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
</div>
</template>

<script>
export default {
  layout: "default",
};
</script>

<style lang="scss" scoped>
</style>