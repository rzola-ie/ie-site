<template>
  <svg
    viewBox="0 0 800 4500"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMin meet"
    class="canvas-mobile flex-1 md:hidden border border-red-500 z-20"
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
        id="bg"
        viewBox="0,0,800,217"
        width="800"
        height="217"
        x="0"
        y="18"
        patternUnits="userSpaceOnUse"
        preserveAspectRatio="xMidYMin meet"
      >
        <rect x="0" y="0" width="800" height="217" fill="#efefef" />

        <line
          x1="0"
          y1="215"
          x2="800"
          y2="215"
          stroke="white"
          stroke-width="3"
        />
      </pattern>
    </defs>
    <g id="hero">
      <g
        style="transform: scale(4) translate(35px, 1px)"
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

      <g style="mix-blend-mode: multiply">
        <circle
          cx="400"
          cy="125"
          r="92"
          fill="#65D8B4"
          style="mix-blend-mode: multiply"
        />
        <circle
          cx="462"
          cy="180"
          r="40"
          fill="#0EA5E9"
          style="mix-blend-mode: multiply"
        />
      </g>

      <foreignObject
        height="400"
        width="681"
        x="105"
        y="310"
        style="border: 1px solid red"
      >
        <h1 class="mb-12 text-6xl text-ie-purple">Audience Research</h1>
        <p class="text-4xl text-gray-600 leading-snug">
          Search behavior is personal, intentional and precise. Exploration of
          this dataset provides a unique window into audience preferences,
          interests and daily lives.
        </p>
      </foreignObject>
    </g>
    <g id="main-content">
      <rect
        width="800"
        height="3200"
        x="0"
        y="1320"
        fill="url()"
        stroke="blue"
      />
    </g>
  </svg>
</template>

<script>
export default {
  layout: "scroller",
};
</script>

<style lang="scss" scoped>
</style>