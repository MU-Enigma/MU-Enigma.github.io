<template>
  <router-view></router-view>
</template>

<script>
export default {
  created() {
    window.scrollTo(0, 0)
  }
}
</script>