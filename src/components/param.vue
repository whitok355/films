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
.b-param:before
    position: absolute
    top: -7px
    left: -25px
    content: ''
    background: $darkGreyColor
    width: 50px
    height: 15px
    transform: rotate(106deg)
.b-tape
    margin-left: 12px
</style>