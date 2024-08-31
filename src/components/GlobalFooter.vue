<template>
  <div class="footer">
    <span> &copy; Amin Zabardast </span>
    <span class="separator"></span>
    <span>
      <a class="hidden-link" href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank"
        >CC BY-NC 4.0</a
      >
    </span>
    <span class="separator"></span>
    <span>
      Created using
      <a class="hidden-link" href="https://vuejs.org/" target="_blank">VueJS</a>
    </span>
    <span class="separator"></span>
    <span>
      Designed based on
      <a class="hidden-link" href="https://github.com/Track3/hermit" target="_blank"
        >Hermit Theme</a
      >
      (MIT License)
    </span>
  </div>
</template>

<style lang="css" scoped>
div.footer {
  padding: 10px;
  margin: 0px;
  text-align: center;
  font-size: 10px;
  color: #7c7c7c;
}

.separator::after {
  content: ' | ';
  padding: 0 5px;
}
</style>
