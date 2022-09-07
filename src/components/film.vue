<template>
<div class="b-wrapper">
    <div class="b-container">
        <div class='b-top'>
            <div class="b-logo">
                <loader/>            
            </div>

            <div class="b-top-els">
                <div class="b-top-el">
                    <router-link to="/"> Назад к списку</router-link>
                    <parameters/>
                    <parameters/>
                    <img src='../assets/img/Vector.svg' alt="#">
                    <img src='../assets/img/arrow.svg' alt="#">
                    <checkbox @check="check" :text="''" :id="'empty'" :boolValue="empty"/>
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
        </main>
    </div>
</div>
</template>
<script>
import loader from './loader'
import parameters from './param'
import checkbox from './checkbox'

export default {
    name: 'film',
    components: { loader, parameters, checkbox },
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
.b-top
    padding-top: 110px
    display: flex
    align-items: center
.b-top-els
    margin-left: 47px
    width: 60%
.b-top-el
    display: flex
    justify-content: space-between
    align-items: center
.b-top-el:last-child
    margin-top: 44px
.b-param:before
    position: absolute
    top: -7px
    left: -25px
    content: ''
    background: $secondBg
    width: 50px
    height: 15px
    transform: rotate(106deg)
a:before
    content: url(~@/assets/img/arrow.svg)
    padding-right: 20.33px
    margin-top: 10px
</style>