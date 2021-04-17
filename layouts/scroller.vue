<template>
  <div id="app" class="relative min-h-screen flex flex-col">
    <Header ref="header" />
    <Nuxt class="flex-1" />
    <!-- <img
      class="absolute w-full inset-x-0 z-1"
      src="/images/reference/audience.png"
      alt=""
      style="top: 190px"
    /> -->
    <!-- <footer class="h-20 w-full p-10">hi</footer> -->
    <Menu />
  </div>
</template>

<style>
@font-face {
  font-family: "Nunito";
  src: url("/fonts/nunito-regular.woff") format("woff"),
    url("/fonts/nunito-regular.woff2") format("woff2"),
    url("/fonts/nunito-regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Avenir";
  src: url("/fonts/avenir-book.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Avenir";
  src: url("/fonts/avenir-black.otf") format("opentype");
  font-weight: 700;
  font-style: normal;
}

::selection {
  background-color: rgb(242, 242, 242);
}

body {
  @apply bg-gray-100;
  font-family: "Avenir";
}
</style>
