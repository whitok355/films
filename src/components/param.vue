<template>
    <div class="b-param">{{duration}} <tape v-if="duration != null"/> </div>
</template>
<script>
import tape from './tape'
export default {
    name: 'parameters', 
    components: { tape },
    props:{
        duration:{
            type: String,
        },
    },
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
    font-weight: 700
    font-size: 12px
    line-height: 12px
    color: $blackColor
    padding-left: 17px
    box-sizing: border-box
.b-tape
    padding-left: 12px
</style>