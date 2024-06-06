<template>
  <aside>
    555
    <n-divider vertical> 
    </n-divider>
    <CustomIcon iconName="ChevronBackSharp"></CustomIcon>
  </aside>
</template>

<script setup>

</script>

<style lang="scss" scoped>
aside {
  height: 100vh;
  overflow: hidden;
  width: 20vw;
  border-right: px_to_rem(1px) solid;
  position: relative;
  .n-divider {
    position: absolute;
    right: 0;
    height: 100vh;
  }
}
</style>
