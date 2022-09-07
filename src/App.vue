<script setup lang="ts">
import FloatingNavVue from './components/FloatingNav.vue'
import ProfileVue from './components/Profile.vue'
import RightVue from './components/Right.vue'
import json from './assets/resume.json'
const resume = { json }
</script>

<template>
  <div class="container-fluid">
    <div class="row main clearfix">
      <FloatingNavVue />
      <ProfileVue :basics="resume.json.basics" />
      <RightVue />
    </div>
  </div>
</template>

<style></style>
