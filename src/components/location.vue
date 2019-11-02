<template>
  <div>

  </div>
</template>
<script>
export default {
  methods: {
    pos() {
      location(city => {
        alert(city);
      });
    }
  }
};
</script>
<style lang="scss">
</style>