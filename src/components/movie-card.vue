<template>
<div class="b-wrapper">
    <div class="b-container">
        <div class='b-top'>
            <div class="b-logo">
                <loader/>            
            </div>
            <div class="b-top-els">
                <div class="b-top-el">
                    <router-link to="/" class="b-arrow"> Назад к списку</router-link>
                    <div class="b-params">
                        <parameters/>
                        <parameters/>
                    </div>
                    <img class="vector" src='../assets/img/Vector.svg' alt="#">
                    <img class="arrow" src='../assets/img/arrow.svg' alt="#">
                    <checkbox class="margin" @check="check" :text="''" :id="'empty'" :boolValue="empty"/>
                    <checkbox @check="check" :text="''" :id="'empty2'" :boolValue="empty2"/>
                </div>
                <div class="b-top-el">
                    <checkbox @check="check" :text="'Отсортировать по названию'" :id="'name'" :boolValue="name"/>
                    <checkbox @check="check" :text="'Отсортировать по году'" :id="'year'" :boolValue="year"/>
                    <checkbox @check="check" :text="'Отсортировать по названию'" :id="'name2'" :boolValue="name2"/>
                    <checkbox @check="check" :text="'Отсортировать по году'" :id="'year2'" :boolValue="year2"/>
                </div>
            </div>
        </div>
        <main>
            <listItem/>
            <listItem/>
            <listItem/>
            <listItem/>
            <listItem/>
            <listItem/>
            <listItem/>
            <listItem/>
        </main>
    </div>
</div>
</template>
<script>
import loader from './loader'
import parameters from './param'
import checkbox from './checkbox'
import listItem from './list-item'
export default {
    name: 'film',
    components: { loader, parameters, checkbox, listItem },
    data(){
        return{
            year: false,
            name: false,
            name2: false,
            year2: false,
            empty: false,
            empty2: false,
        }
    },
    methods:{
        check(e){
            this[e.target.id] = true
            if(e.target.id === 'name'){
                this.year = false
                this.name2 = false
                this.year2= false
            }
            if(e.target.id === 'year'){
                this.name = false
                this.name2 = false
                this.year2= false
            }
            if(e.target.id === 'name2'){
                this.year = false
                this.name = false
                this.year2= false
            }
            if(e.target.id === 'year2'){
                this.year = false
                this.name = false
                this.name2 = false
            }
            if(e.target.id === 'empty'){
                this.empty2 = false
            }
            if(e.target.id === 'empty2'){
                this.empty = false
            }
        }
    }
}
</script>
<style lang='sass' scoped>
.b-wrapper
    background: $secondBg
.b-container
    min-height: 100vh
    max-width: 1920px
    margin: 0 auto
main
    margin-top: 60px
.b-top
    padding-top: 84px
    display: flex
.b-logo
    margin-left: -5px
.b-top-els
    margin-left: 38px
.b-top-el
    display: flex
    align-items: center
.b-top-el:first-child
     margin-top: 22px   
.b-top-el:last-child
    margin-top: 44px
.b-params
    display: flex
.b-param:first-child
    margin-left: 62px
.b-param:last-child
    margin-left: 27px
.b-param:before
    position: absolute
    top: -7px
    left: -25px
    content: ''
    background: $secondBg
    width: 50px
    height: 15px
    transform: rotate(106deg)
.b-arrow:before
    content: url(~@/assets/img/arrow.svg)
    padding-right: 20.33px
    margin-top: 10px
.vector
    margin-left: 30px
.arrow
    margin-left: 36px
    margin-right: 44px
.margin
    margin-right: 17px
.b-check-box:nth-child(1)
    margin-right: 34.5px
.b-check-box:nth-child(2)
    margin-right: 62.5px   
.b-check-box:nth-child(3)
    margin-right: 26.7px 
</style>