<script setup lang="ts">
import FloatingNavVue from './components/FloatingNav.vue'
import ProfileVue from './components/Profile.vue'
import RightVue from './components/Right.vue'
import json from './assets/resume.json'
const resume = json

type resumeType = {
  $schema: string
  basics: {
    name: string
    label: string
    image: string
    email: string
    phone: string
    url: string
    summary: string
    location: {
      region: string
      city: string
      address: string
    }
  }
}
</script>

<template>
  <div class="container-fluid">
    <div class="row main clearfix">
      <FloatingNavVue />
      <ProfileVue :basics="resume.basics" />
      <RightVue />
    </div>
  </div>
</template>

<style></style>
