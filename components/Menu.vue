<template>
  <div
    :class="[
      `fixed flex flex-col inset-0 bg-white py-6 px-6 z-50 md:px-16 xl:px-24 ${
        isOpen
          ? 'pointer-events-auto opacity-100'
          : 'opacity-0 pointer-events-none'
      } transform ease-in duration-150`,
    ]"
  >
    <div class="flex justify-between items-center">
      <nuxt-link to="/">
        <img
          class="w-24"
          src="/images/logo.svg"
          alt="Idea Evolver Logo"
          @click="toggleMenu"
        />
      </nuxt-link>

      <button
        class="rounded-sm focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-400 focus:ring-opacity-60"
        @click="toggleMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-8 w-8 text-gray-400 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <div class="flex-1" @click="toggleMenu">
      <nav id="menu-links" class="flex flex-col text-2xl text-gray-600 pt-32">
        <nuxt-link class="mb-8" to="/search-behavior-analysis">
          Search Behavior Analysis
        </nuxt-link>

        <nuxt-link class="mb-8" to="/software-development">
          Software Development
        </nuxt-link>

        <nuxt-link class="mb-8" to="/search-experience-marketing">
          Search Experience Marketing
        </nuxt-link>

        <nuxt-link class="mb-8" to="/about"> About </nuxt-link>

        <nuxt-link class="mb-8" to="/careers"> Careers </nuxt-link>

        <nuxt-link class="" to="/contact">Contact Us</nuxt-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    this.$nuxt.$on("toggleMenu", () => (this.isOpen = !this.isOpen));
  },
  methods: {
    toggleMenu() {
      this.$nuxt.$emit("toggleMenu");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>