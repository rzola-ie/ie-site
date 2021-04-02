<template>
  <svg
    class="canvas-mobile flex-1"
    :viewBox="`0 0 800 1200`"
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
        <!-- <rect x="0" y="0" height="200" width="200" fill="red"></rect> -->
        <circle
          style="mix-blend-mode: multiply"
          cx="60"
          cy="40"
          r="20"
          fill="#65D8B4"
        />
        <circle
          style="mix-blend-mode: multiply"
          cx="17.7"
          cy="13.2"
          r="4"
          fill="#38BDF8"
        />
      </pattern>

      <g id="phone">
        <path
          fill="#efcb57"
          fill-rule="evenodd"
          style="mix-blend-mode: multiply"
          d="M110 84.8l.06-6.37c19.64-29.27 71.16-22.69 82-24.26 10.78 1.81 62.4-3.65 81.48 26l-.06 6.37c.36 24.38 17 31.49 45.07 31.8 24.95.27 45.33 4.83 45.52-15.5l.12-12.75c.15-15.62-4.26-29.95-11.57-40.76 0 0-16.71-29.74-57.31-42.66A111.78 111.78 0 00262.5 1.5L192.51.77 122.57 0a111.83 111.83 0 00-32.9 4.45c-40.84 12-58.11 41.4-58.11 41.4-7.51 10.67-12.18 24.89-12.33 40.52l-.12 12.74c-.2 20.33 20.26 16.22 45.21 16.49 28.06.31 44.85-6.44 45.68-30.8z"
        ></path>
        <path
          fill="#efcb57"
          fill-rule="evenodd"
          style="mix-blend-mode: multiply"
          d="M90.48 125h208a22 22 0 0120.41 13.77l62.08 154A22 22 0 01360.55 323H22a22 22 0 01-20.1-30.94l68.48-154A22 22 0 0190.48 125z"
        ></path>
        <ellipse
          cx="192.14"
          cy="143.5"
          rx="69"
          ry="68.5"
          style="mix-blend-mode: multiply"
          fill="#4bbfe1"
        ></ellipse>
      </g>
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

    <use
      href="#phone"
      x="208"
      y="-260"
      style="transform-origin: center; transform: scale(0.6)"
    />

    <!-- <path d="M400 0 v1200" stroke="red" /> -->

    <foreignObject height="90" width="681" x="70" y="380">
      <h1 class="text-7xl tracking-wide leading-normal text-ie-purple">
        Contact Us
      </h1>
    </foreignObject>

    <foreignObject height="200" width="681" x="70" y="580">
      <div class="text-5xl text-gray-600">
        <p class="mb-4">1315 Walnut Street</p>
        <p class="mb-4">Suite 932</p>
        <p class="mb-4">Philadelphia, PA 19107</p>
      </div>
    </foreignObject>

    <foreignObject x="70" y="900" width="681" height="180">
      <div class="text-5xl text-gray-600">
        <a class="inline-block mb-6" href="tel:+2154209053">215-420-9053</a>
        <a
          class="inline-block border-b-3 border-blue-400 pb-2"
          href="mailto:press1for@ideaevolver.com"
          >press1for@ideaevolver.com</a
        >
      </div>
    </foreignObject>
  </svg>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>