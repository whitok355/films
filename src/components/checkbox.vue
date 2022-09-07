<template>
        <div class="b-check-box">
            <div :id="id" @click="check" class="b-input" :class="boolValue ? 'b-pink': 'b-grey'"></div>
            <div class="b-label">{{text}}</div>
        </div>
</template>
<script>
export default {
    name: 'checkbox',
    props:{
        text:{
            type: String,
        },
        boolValue:{
            type: Boolean,
        },
        id: {
            type: String,
        }
    },
    data(){
        return{
            name: false,
            year: false,
        }
    },
    methods:{
        check(e){
            this.$emit('check', e)
        }
    }
}
</script>
<style lang='sass' scoped>
.b-label
    font-weight: 400
    font-size: 16px
    line-height: 16px
    color: $lightGreyColor
.b-check-box
    display: flex
    align-items: center
.b-check-box:first-child
    margin-right: 34.5px
.b-input
    width: 15px
    height: 15px
    margin-right: 10.5px
    display: flex
    justify-content: center
    align-items: center
.b-grey
    border: 1px solid $lightGreyColor
.b-pink
    background: $pinkColor
    border: 1px solid white
.b-pink:after
    content: url(~@/assets/img/mark.svg)
</style>