<script setup lang="ts">
import FloatingNavVue from './components/FloatingNav.vue'
import ProfileVue from './components/Profile.vue'
import RightVue from './components/Right.vue'
import { ResumeInfo } from './resumeInfo'
import json from './assets/resume.json'
const resume: ResumeInfo = json
</script>

<template>
  <div class="container-fluid">
    <div class="row main clearfix">
      <FloatingNavVue />
      <!-- <ProfileVue :basics="resume.basics" /> -->
      <ProfileVue :resume="resume" />
      <!-- <ProfileVue :props="props" /> -->
      <RightVue :resume="resume" />
    </div>
  </div>
</template>

<style></style>
