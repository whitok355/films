<template>
<div class="b-background-container">
    <div class="b-container">
        <div class='b-filters'>
            <loader/>
        </div>
        <main>
        </main>
    </div>
</div>
</template>
<script>
import loader from './loader'

export default {
    name: 'film',
    components: { loader },
}
</script>
<style lang='sass' scoped>
.b-background-container
    background: $secondBg
.b-container
    min-height: 100vh
    max-width: 1920px
    margin: 0 auto
.b-filters
    padding-top: 110px
</style>