<template>
  <div
    id="app"
    class="container relative h-screen flex flex-col overflow-hidden mx-auto"
  >
    <Header ref="header" />
    <Nuxt class="flex-1" />
    <img
      class="absolute left-2/4 -z-1 transform -translate-x-1/2 hidden"
      src="/images/reference/contact.png"
      alt=""
    />
    <footer class="w-screen z-1">
      <p class="text-gray-600 text-xs text-center p-5 bg-transparent">&copy; 2021 IDEA EVOLVER. All rights reserved.</p>
    </footer>
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
