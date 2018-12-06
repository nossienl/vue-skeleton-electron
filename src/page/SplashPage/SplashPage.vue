<style src="./SplashPage.scss" module lang="scss"></style>
<script src="./SplashPage.js"></script>

<template>
  <div :class="$style.splashPage">
    <div :class="$style.loading">
      <div :class="[$style.line, $style.line1]"/>
      <div :class="[$style.line, $style.line2]"/>
      <div :class="[$style.line, $style.line3]"/>
      <div :class="$style.dot"/>
      <Icon name="vue" :class="$style.vueLogo"/>
    </div>
  </div>
</template>
