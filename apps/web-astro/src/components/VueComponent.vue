<template>
  <div>
    <h2>Vue component</h2>
    <p>FOO = {{ FOO }}</p>
    <p>PUBLIC_FOO = {{ PUBLIC_FOO }}</p>
    
    <!--
      secret will absolutely be leaked if you put it in the template
      regardless of naming, or if you fetch from process.env or import.meta.env
      it is unlikely as you'd usually use a secret to do something like fetch data...
    -->
    <!-- <p>SECRET_FOO = {{ SECRET_FOO }}</p> -->
  </div>

</template>

<script setup lang="ts">
console.log('vue component script!');

const FOO = import.meta.env.FOO;
const PUBLIC_FOO = import.meta.env.PUBLIC_FOO;
console.log('logging from vue component...', import.meta.env.SECRET_FOO);
</script>