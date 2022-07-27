<script setup lang="ts">
import { onBeforeMount } from 'vue'
import FloatingNavVue from './components/FloatingNav.vue'
import ProfileVue from './components/Profile.vue'
import RightVue from './components/Right.vue'
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
