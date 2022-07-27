<template>
  <section class="col-md-3 card-wrapper profile-card-wrapper affix">
    <div class="card profile-card">
      <span class="profile-pic-container"
        ><div class="profile-pic">
          <img
            class="media-object img-circle center-block"
            data-src="holder.js/100x100"
            alt="David WU"
            src="https://s.gravatar.com/avatar/54db9e31d89a0dc690e2026d8efcdc08?s=100&amp;r=pg&amp;d=mm"
            itemprop="image"
          />
        </div>
        <div class="name-and-profession text-center">
          <h3 itemprop="name"><b>David WU</b></h3>
          <h5 class="text-muted" itemprop="jobTitle">C# Developer</h5>
        </div></span
      >
      <hr />
      <div class="contact-details clearfix">
        <div class="detail">
          <span class="icon"><i class="icon fs-lg icon-location"></i></span
          ><span class="info">Pointe-Claire, Montreal, QC</span>
        </div>
        <div class="detail">
          <span class="icon"><i class="icon fs-lg icon-phone"></i></span
          ><span class="info" itemprop="telephone">51481308XX</span>
        </div>
        <div class="detail">
          <span class="icon"><i class="icon fs-lg icon-mail"></i></span
          ><span class="info"
            ><a
              class="link-disguise"
              href="mailto:david.dong.guo@gmail.com"
              itemprop="email"
              >david.dong.guo@gmail.com</a
            ></span
          >
        </div>
      </div>
      <hr />
      <div class="social-links text-center">
        <div>
          <a
            class="fs-2x social-link link-linkedin icon-linkedin"
            href="https://www.linkedin.com/in/daviddongguo/"
            target="_blank"
            data-toggle="tooltip"
            title="David WU on LinkedIn"
          ></a
          ><a
            class="fs-2x social-link link-github icon-github"
            href="https://www.github.com/daviddongguo/"
            target="_blank"
            data-toggle="tooltip"
            title="David WU on Github"
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
