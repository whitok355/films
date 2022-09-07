<template>
    <div class="b-param">142 МИН / 02:22:00 <tape/></div>
</template>
<script>
import tape from './tape'
export default {
    name: 'parameters', 
    components: { tape }
}
</script>
<style lang='sass' scoped>
.b-param
    position: relative
    width: 184px
    height: 30px
    background: $lightGreyColor
    display: flex
    align-items: center
    justify-content: center
    font-weight: 700
    font-size: 12px
    line-height: 12px
    color: $blackColor
.b-tape
    margin-left: 12px
</style>