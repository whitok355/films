<template>
    <div class="b-check-boxs">
        <div class="b-check-box">
            <div id="name" @click="check" :class="name ? 'b-pink':'b-grey'" class="b-input"></div>
            <div class="b-label">Отсортировать по названию</div>
        </div>
        <div class="b-check-box">
            <div id="year" @click="check" :class="year ? 'b-pink':'b-grey'" class="b-input"></div>
            <div class="b-label">Отсортировать по году</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'checkbox',
    props:{
        text:{
            type: String,
        },
    },
    data(){
        return{
            name: false,
            year: false,
        }
    },
    methods:{
        check(e){
            this[e.target.id] = true
            if(e.target.id === 'name'){
                this.year = false
            }
            if(e.target.id === 'year'){
                this.name = false
            }
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
.b-check-boxs
    display: flex
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
    background: $mainBg
.b-pink
    background: $pinkColor
    border: 1px solid white
.b-pink:after
    content: url(~@/assets/img/mark.svg)
</style>