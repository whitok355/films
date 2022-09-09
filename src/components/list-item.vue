<template>
<router-link class="b-link" to='/movie-card/'>
    <div class="b-item">
        <div class="b-img">
            <img src="~@/assets/img/1.png" alt="#">
        </div>
        <div class="b-content">
            <div class="b-content-top">
                <h2>{{film.title}}</h2>
                <parameters  v-for="(duration, id) in film.collapse.duration" :duration="duration" :key="id"/>
            </div>
            <div class="b-discr">
                <div class="b-discr-line"><h4>{{film.year}}, </h4><h4 v-for="(value, id) in film.genres" :key="id">{{value}}</h4></div>
                 <div class="b-discr-line"><h4 class="b-h4">режиссёр: </h4><h4 v-for="(value, id) in film.directors" :key="id"> {{value}}</h4></div>
                <div class="b-discr-line"><h4 class="b-h4">Актёры:</h4> <h5 template v-for="(actor, id) in film.actors" :key="id"> {{actor}}</h5>
                </div>
                <p>{{ film.description }}</p>
            </div>
        </div>
    </div>
</router-link>
</template>
<script>
import parameters from './param'
export default {
    name: 'listItem',
    components: { parameters },
    props:{
        film:{
            type: Object
        }
    },
}
</script>
<style lang="sass" scoped>
.b-link
    text-decoration: none
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
.b-item
    display: flex
    width: 100%
    margin-top: 40px
.b-img
    text-align: center
    width: 195px
    height: inherit
    background: $lightGreyColor
    display: flex
    align-items: center
    justify-content: center
.b-img img
    width: 112px
    height: 168px
.b-content
    padding: 32px 0 0 24px
    background: $darkGreyColor
    width: 100%
.b-content-top
    display: flex
    align-items: center
    justify-content: space-between
.b-discr
    margin-top: 12px
.b-discr-line
    display: flex
    align-items: center
    margin-top: 10px
    flex-wrap: wrap
.b-discr-line h4
    margin-right: 5px
.b-discr p
    margin-top: 16px
    margin-bottom: 32px
.b-h4
    text-transform: uppercase
    margin-right: 5px
.b-actors
    margin-top: 8px
    display: flex
    align-items: center
    flex-wrap: wrap
    margin-bottom: 16px
.b-param:before
    position: absolute
    top: -7px
    left: -25px
    content: ''
    background: $darkGreyColor
    width: 50px
    height: 15px
    transform: rotate(106deg)
</style>