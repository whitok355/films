<template>
    <main>
        <div class="b-container">
            <div class="b-top">
                <h3>Фильмы</h3>
                <div class="b-check-boxs">
                    <checkbox @check="check" :boolValue="name" :text="'Отсортировать по названию'" :id="'name'"/>
                    <checkbox @check="check" :boolValue="year" :text="'Отсортировать по году'" :id="'year'"/>
                </div>
                <hr class="b-hr">
            </div>
            <div class="b-list-items">
                <listItem/>
                <listItem/>
                <listItem/>
                <listItem/>
                <listItem/>
                <listItem/>
                <listItem/>
            </div>
        </div>
    </main>
</template>
<script>
import checkbox from './checkbox'
import listItem from './list-item'
export default {
    name: 'list',
    components: { checkbox, listItem },
    data(){
        return{
            year: false,
            name: false,
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
main
    padding-top: 40px
    background: $mainBg
    height: 100vh
.b-container
    margin: 0 auto
    max-width: 1400px
.b-top
    display: flex
    flex-direction: column
.b-check-boxs
    margin-top: 18px
    display: flex
    align-items: center
.b-hr
    color: $lightGreyColor
    max-width: 1400px
    margin-top: 18px
.b-list-items
    display: flex
    flex-direction: column
    margin-top: 40px
.b-item:not(:first-child)
    margin-top: 40px
</style>