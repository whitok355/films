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
                    <div class="b-params" v-if="loaded">
                        <parameters :duration="getDuration"/>
                        <parameters :duration="getDuration"/>
                    </div>
                    <img class="vector" src='../assets/img/Vector.svg' alt="#">
                    <img class="arrow" src='../assets/img/arrow.svg' alt="#">
                    <checkbox name="secondFIlter" class="margin" @check="check" :text="''" :id="'empty'" :boolValue="empty"/>
                    <checkbox name="secondFIlter" @check="check" :text="''" :id="'empty2'" :boolValue="empty2"/>
                </div>
                <div class="b-top-el">
                    <checkbox name="mainFilter" @check="check" :text="'Отсортировать по названию'" :id="'name'" :boolValue="name"/>
                    <checkbox name="mainFilter" @check="check" :text="'Отсортировать по году'" :id="'year'" :boolValue="year"/>
                    <checkbox name="mainFilter" @check="check" :text="'Отсортировать по названию'" :id="'name2'" :boolValue="name2"/>
                    <checkbox name="mainFilter" @check="check" :text="'Отсортировать по году'" :id="'year2'" :boolValue="year2"/>
                </div>
            </div>
        </div>
        <main>
            <div class="b-err" v-if="err">{{err}}</div>
            <listItem  v-if="loaded" :film="viewFilm"/>
            <div v-if="!loaded && !err" class="b-loader-container">
                <loader class="b-loader-el"/>
            </div>
        </main>
    </div>
</div>
</template>
<script>
import loader from './loader'
import parameters from './param'
import checkbox from './checkbox'
import listItem from './list-item'
import {mapState, mapActions} from 'vuex'

export default {
    name: 'film',
    components: { loader, parameters, checkbox, listItem },
    data(){
        return{
            year: false,
            year2: false,
            name: false,
            name2: false,
            empty: false,
            empty2: false,
            film: null,
        }
    },
    methods:{
        ...mapActions(['filterNameA', 'filterYearA', 'getDataA', "getFilmA"]),
        check(e){
            if(this[e.target.id] === true){
                this[e.target.id] = false
            } else{
                this[e.target.id] = true
                if(e.target.id === 'name'){
                    this.year = false
                    this.name2 = false
                    this.year2= false
                    this.filterNameA()
                }
                if(e.target.id === 'year'){
                    this.name = false
                    this.name2 = false
                    this.year2= false
                    this.filterYearA()
                }
                if(e.target.id === 'name2'){
                    this.year = false
                    this.name = false
                    this.year2= false
                    this.filterNameA()
                }
                if(e.target.id === 'year2'){
                    this.year = false
                    this.name = false
                    this.name2 = false
                    this.filterYearA()
                }
                if(e.target.id === 'empty'){
                    this.empty2 = false
                    this.filterNameA()
                }
                if(e.target.id === 'empty2'){
                    this.empty = false
                    this.filterYearA()
                }
            }
        },
    },
    mounted(){
        this.getFilmA(this.getApi)
    },
    computed:{
        ...mapState({
            viewFilm: (state)=> state.viewFilm,
            loaded: (state)=> state.loaded,
            err: (state)=> state.err,
        }),
        getApi(){
            return `https://floating-sierra-20135.herokuapp.com/api/movie/${this.$route.params.id}`
        },
        getDuration(){
            let res;
            if(this.viewFilm.collapse.duration) res = this.viewFilm.collapse.duration[0];
            if(!this.viewFilm.collapse.duration) res = null;
            return res
        },
        getLoader(){
            return this.viewFilm? false: true
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
    margin-top: 98px
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
.b-loader-container
    margin-top: 255.44px
    text-align: center
.b-err
    text-align: center
.b-loader-el
    animation-name: rotation
    animation-duration: 2s
    animation-iteration-count: infinite
    animation-timing-function: linear
@keyframes rotation 
    0% 
        transform: rotate(0deg)
    100% 
        transform: rotate(360deg) 
</style>