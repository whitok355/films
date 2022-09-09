<template>
    <main>
        <div class="b-container">
            <div class="b-top">
                <h3>Фильмы</h3>
                <div class="b-checkboxs">
                    <checkbox @check="check" :boolValue="name" :text="'Отсортировать по названию'" :id="'name'"/>
                    <checkbox @check="check" :boolValue="year" :text="'Отсортировать по году'" :id="'year'"/>
                </div>
                <hr class="b-hr">
            </div>
            <div class="b-list-items" v-if="data != null" >
                <listItem class="b-action" v-for="(item, id) in data" :film='item' :key="id"/>
            </div>
            <div class="b-loader-container">
                <loader/>           
            </div>
        </div>
    </main>
</template>
<script>
import checkbox from './checkbox'
import listItem from './list-item'
import loader from './loader'

export default {
    name: 'list',
    components: { checkbox, listItem, loader },
    data(){
        return{
            year: false,
            name: false,
            data: null,
        }
    },
    mounted(){
        this.axios
            .get('https://floating-sierra-20135.herokuapp.com/api/movies')
            .then(responce => (this.data = responce.data.data))
    },
    methods:{
        check(e){
            this[e.target.id] = true
            if(e.target.id === 'name'){
                this.year = false
                this.filterName()
            }
            if(e.target.id === 'year'){
                this.name = false
                this.filterYear()
            }
        },
        filterName(){
            this.data = this.data.sort((prev, next)=> prev.title.localeCompare(next.title))
        },
        filterYear(){
            this.data = this.data.sort((prev, next) => prev.year - next.year)
        }
    },
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