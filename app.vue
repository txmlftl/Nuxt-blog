<script setup lang="ts">
import { ref } from "vue";
import { darkTheme } from "naive-ui";
const layoutName = ref("default");
</script>
<template>
  <n-config-provider :theme="darkTheme">
    <NuxtLoadingIndicator />

    <NuxtLayout :name="layoutName">
      <NuxtPage />
    </NuxtLayout>
  </n-config-provider>
</template>
<style lang="scss">
.n-config-provider{
  height: 100vh;
  width: 100vw;
}

</style>
