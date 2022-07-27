<script setup lang="ts">
import { onBeforeMount } from 'vue'
import FloatingNavVue from './components/FloatingNav.vue'
import ProfileVue from './components/Profile.vue'
import RightVue from './components/Right.vue'
onBeforeMount(() => {
  const WebFontConfig = {
    google: {
      families: ['Roboto:300,400,700'],
    },
  }

  ;(function (d) {
    var wf = d.createElement('script'),
      s = d.scripts[0]
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
    wf.async = true
    s.parentNode.insertBefore(wf, s)
  })(document)
})
</script>

<template>
  <div class="container-fluid">
    <div class="row main clearfix">
      <FloatingNavVue />
      <ProfileVue />
      <RightVue />
    </div>
  </div>
</template>

<style></style>
