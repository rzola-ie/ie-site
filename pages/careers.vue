<template>
  <svg
    class="canvas-mobile flex-1 w-full"
    :viewBox="`0 0 800 800`"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMin meet"
    style="border: 1px solid red"
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

      <g id="laptop">
        <rect
          y="308"
          width="340"
          height="16"
          rx="2"
          style="mix-blend-mode: multiply"
          fill="#d85cb8"
        ></rect>
        <rect
          y="64"
          width="340"
          height="227"
          rx="10"
          style="mix-blend-mode: multiply"
          fill="#df5fbe"
        ></rect>
        <ellipse
          cx="170"
          cy="68.5"
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
        id="bot"
        href="#brackets"
        style="transform: scale(1, -1) translate(0, 545px)"
      />
    </g>

    <use
      href="#laptop"
      x="230"
      y="-100"
      style="transform-origin: center; transform: scale(0.6)"
    />

    <!-- <path d="M400 0 v1200" stroke="red" /> -->

    <foreignObject height="700" width="681" x="70" y="380">
      <h1 class="text-7xl tracking-wide leading-normal text-ie-purple mb-9">
        Careers
      </h1>

      <div class="text-gray-600">
        <p class="mb-16 text-4xl leading-normal">
          We are always on the lookout for talented marketers, software
          engineers, designers and regulatory specialists.
        </p>

        <a
          class="inline-block border-b-3 border-blue-400 pb-0.5 text-5xl"
          href="mailto:press1for@ideaevolver.com"
          >careers@ideaevolver.com</a
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