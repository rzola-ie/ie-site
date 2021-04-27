<template>
  <div id="app" class="relative min-h-screen min-h-none flex flex-col">
    <img class="w-screen absolute hidden md:block xl:block -top-12 z-behind" src="/images/bracket-bg.svg" alt="Background Image">

    <Header ref="header" />
    <Nuxt class="flex-1" />
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
  /* @apply bg-gray-100; */
  background-color: #f8f8f8;
  font-family: "Avenir";
}
</style>
