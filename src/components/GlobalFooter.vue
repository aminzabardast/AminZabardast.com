<template>
  <div class="footer">
    <span> &copy; Amin Zabardast </span>
    <span class="separator"></span>
    <span>
      <Link color="#EF9421" href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank"
        >CC BY-NC 4.0</Link
      >
    </span>
    <span class="separator"></span>
    <span>
      Created using
      <Link color="#4FC08D" href="https://vuejs.org/" target="_blank">VueJS</Link>
    </span>
    <span class="separator"></span>
    <span>
      Designed based on
      <Link color="lightgrey" href="https://github.com/Track3/hermit" target="_blank"
        >Hermit Theme</Link
      >
      (MIT License)
    </span>
  </div>
</template>

<script lang="ts" setup>
import Link from '@/components/AnimatedLink.vue'
</script>

<style lang="css" scoped>
div.footer {
  padding: 10px;
  margin: 0px;
  text-align: center;
  font-size: 0.8em;
  color: #7c7c7c;
}

.separator::after {
  content: ' | ';
  padding: 0 5px;
}

a {
  color: #7c7c7c;
}
</style>
