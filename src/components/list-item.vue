<template>
<router-link class="b-list-items b-link" to='/film/'>
    <div class="b-item">
        <div class="b-img">
            <img src="~@/assets/img/1.png" alt="#">
        </div>
        <div class="b-content">
            <div class="b-content-top">
                <h2>Гамильтон</h2>
                <parameters/>
            </div>
            <h4>2015, мюзикл</h4>
            <h4>режиссёр: Томас Каил</h4>
            <h4>Актёры: <span>Лин-Мануэль Миранда, Лесли Одом мл., Давид Диггс, Филлипа Су, Рене Голдсберри, Окьерете Онаодован, Энтони Рамос, Джонатан Грофф, Кристофер Нил Джексон, Жасмин Сепас Джонс</span></h4>
            <p>Жил-был пёс. Верно служил, но выгнали его по старости. И решил он повеситься, да повстречал в лесу такого же старого волка...</p>
        </div>
    </div>
</router-link>
</template>
<script>
import parameters from './param'
export default {
    name: 'listItem',
    components: { parameters }
}
</script>
<style lang="sass" scoped>
.b-link
    text-decoration: none
.b-item
    display: flex
.b-img
    text-align: center
    width: 168px
    min-height: 168px
    background: $lightGreyColor
.b-img img
    width: 112px
.b-content
    padding: 32px 0 0 24px
    background: $darkGreyColor
    width: 100%
.b-content-top
    display: flex
    align-items: center
    justify-content: space-between
.b-content h2
    margin-top: 12px
.b-content h4
    margin-top: 8px
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