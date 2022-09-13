<template>
    <main>
        <div class="b-container">
            <div class="b-top">
                <h3>Фильмы</h3>
                <div class="b-checkboxs">
                    <checkbox name="mainFilter" @check="check" :boolValue="name" :text="'Отсортировать по названию'" :id="'name'"/>
                    <checkbox name="mainFilter" @check="check" :boolValue="year" :text="'Отсортировать по году'" :id="'year'"/>
                </div>
                <hr class="b-hr">
            </div>
            <div class="b-list-items" v-if="data != null" >
            <div v-if="err" class="b-err">{{err}}</div>
            <router-link class="b-link" v-for="(film, id) in filterData" :key="id" :to='{name:"Film", params: {id:film.id}}' @click="setViewFilmA(film)">
                <listItem class="b-action" :film='film'/>
            </router-link>
            </div>
            <div v-if="!err && !filterData" class="b-loader-container">
                <loader class="b-loader-el"/>           
            </div>
        </div>
    </main>
</template>
<script>
import checkbox from './checkbox'
import listItem from './list-item'
import loader from './loader'
import {mapState, mapActions} from 'vuex'

export default {
    name: 'list',
    components: { checkbox, listItem, loader },
    mounted(){
        this.getDataA(this.apiAll)
    },
    data(){
        return{
            name: false,
            year: false,
        }
    },
    methods:{
        ...mapActions(['getDataA', 'setViewFilmA', 'filterNameA', 'filterYearA', 'clearFilterA']),
        check(e){
            if(this[e.target.id] === true){
                this[e.target.id] = false
                this.clearFilterA()
            } else{
                this[e.target.id] = true
                if(e.target.id === 'name'){
                    this.year = false
                    this.filterNameA()
                }
                if(e.target.id === 'year'){
                    this.name = false
                    this.filterYearA()
                }
            }
        }
    },
    computed:{
        ...mapState({
            data: (state) => state.data,
            filterData: (state) => state.filterData,
            apiAll: (state) => state.apiAll,
            err: (state)=> state.err,
        })
    }
}
</script>
<style lang='sass' scoped>
main
    padding-top: 40px
    background: $mainBg
    min-height: 100vh
.b-container
    margin: 0 auto
    max-width: 1410px
.b-top
    display: flex
    flex-direction: column
.b-checkboxs
    margin-top: 16px
    display: flex
    align-items: center
.b-hr
    color: $lightGreyColor
    width: 100%
    margin-top: 18px
.b-check-box:first-child
    margin-right: 34.5px
.b-action:hover
    transform: translateY(-8px)
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.35)
    transition: all 0.5s
.b-loader-container
    margin-top: 255.44px
    text-align: center
.b-link
    text-decoration: none
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
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