<template>
  <div class="b-wrapper">
      <header>
        <h1>#movienow</h1>
      </header>
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  font-family: 'Roboto', sans-serif
header
  min-height: 100px
  background: $redColor
  display: flex
  align-items: center
  justify-content: center
  box-shadow: 0px 8px 7px rgba(0, 0, 0, 0.28)
</style>
