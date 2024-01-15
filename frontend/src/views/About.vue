<!-- This page will present the About (our company / project) Page -->
<template>
  <div class="about">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <C_Header title="About Dart Online" />
        </div>
      </div>
    </div>
    <div class="container">
      <p class="org-description is-size-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quia
        aperiam eligendi dolorum reprehenderit ea amet, aliquid dolorem beatae,
        iste aliquam ullam. Sequi ab eligendi consectetur neque laudantium,
        libero asperiores.
      </p>
      <p class="org-description is-size-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quia
        aperiam eligendi dolorum reprehenderit ea amet, aliquid dolorem beatae,
        iste aliquam ullam. Sequi ab eligendi consectetur neque laudantium,
        libero asperiores.
      </p>
    </div>
  </div>
</template>

<script>
import C_Header from "../components/global/C_Header.vue";
export default {
  components: { C_Header }
}
</script>
