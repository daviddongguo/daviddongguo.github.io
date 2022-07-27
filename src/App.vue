<script setup lang="ts">
import { onMounted } from 'vue'
import FloatingNavVue from './components/FloatingNav.vue'
import ProfileVue from './components/Profile.vue'
import RightVue from './components/Right.vue'
onMounted(() => {
  console.log('onMounted')
  const WebFontConfig = {
    google: { families: ['Lato:300,400,700:latin'] },
  }
  ;(function () {
    const wf = document.createElement('script')
    wf.src =
      ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js'
    wf.type = 'text/javascript'
    wf.async = 'true'
    const s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(wf, s)
  })()
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
