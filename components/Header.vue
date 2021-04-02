<template>
  <header id="header" class="w-full py-6 z-40">
    <div
      id="header-container"
      class="flex justify-between items-center mx-6 md:mx-16 xl:mx-24"
    >
      <div id="header-logo">
        <nuxt-link to="/">
          <img class="w-24" src="/images/logo.svg" alt="Idea Evolver Logo" />
        </nuxt-link>
      </div>
      <nav id="header-links" class="hidden xl:inline-block">
        <ul class="flex">
          <li
            id="audience-research"
            class="mr-12 text-gray-700 hover:text-gray-500 transition ease-in duration-150"
          >
            <nuxt-link to="/audience-research"> Audience Research</nuxt-link>
          </li>
          <li
            id="software-development"
            class="mr-12 text-gray-700 hover:text-gray-500 transition ease-in duration-150"
          >
            <nuxt-link to="/software-development">
              Software Development
            </nuxt-link>
          </li>
          <li
            id="search-experience-marketing"
            class="mr-12 text-gray-700 hover:text-gray-500 transition ease-in duration-150"
          >
            <nuxt-link to="/search-experience-marketing">
              Search Experience Marketing
            </nuxt-link>
          </li>
          <li
            id="careers"
            class="mr-12 text-gray-700 hover:text-gray-500 transition ease-in duration-150"
          >
            <nuxt-link to="/careers">Careers</nuxt-link>
          </li>
          <li
            id="contact"
            class="mr-0 text-gray-700 hover:text-gray-500 transition ease-in duration-150"
          >
            <nuxt-link to="/contact">Contact Us</nuxt-link>
          </li>
        </ul>
      </nav>
      <button
        id="mobile-hamburger"
        aria-label="Toggle menu"
        @click="toggleMenu"
        class="relative inline-block float-right rounded-sm focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-400 focus:ring-opacity-60 xl:hidden"
      >
        <svg
          class="h-8 w-8 text-gray-400 stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.$nuxt.$emit("toggleMenu");
    },
  },
};
</script>