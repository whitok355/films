import {createStore} from 'vuex'
import axios from 'axios'

const store = createStore({
    state:{
        apiAll: `https://floating-sierra-20135.herokuapp.com/api/movies`,
        data: null,
        filterData: null,
        viewFilm: null,
        loaded: false,
        err: null,
    },
    actions:{
        getDataA({commit}, api){
            axios
            .get(api)
            .then(response => {
                commit('getDataM', response.data.data)
            })
        },
        getFilmA({commit}, api){
            axios.get(api)
                .then(response => {
                if(response.data.data == null){
                    commit('getErr', 'К сожалению, по вашему запросу ничего не найдено...')
                }
                if(response.data.data != null && response.status == 200){
                    commit('setViewFilmM', response.data.data)
                }
            })
        },
        getIdA({commit}, id){
            commit('getIdM', id)
        },
        setViewFilmA({commit}, film){
                commit('setViewFilmM', film)
        },
        filterNameA({commit, state}){
            if(state.filterData){
                commit('filterNameM')
            }

        },
        filterYearA({commit, state}){
            if(state.filterData){
                commit('filterYearM')
            }
        },
        clearFilterA({commit}){
            commit('clearFilterM')
        }
    },
    mutations:{
        getDataM(state, data){
            state.data = data;
            state.filterData = Array.from(state.data);
            state.err = null;
        },
        getIdA(state, id){
            state.idRoute = id
        },
        getErr(state, text){
            state.err = text;
        },
        changeValueM(state, e){
            state[e.el] = e.value
        },
        filterNameM(state){
            state.filterData = state.filterData.sort((prev, next)=> +prev.title.localeCompare(next.title, 'en'))
        },
        filterYearM(state){
            state.filterData = state.filterData.sort((prev, next) => prev.year - next.year)
        },
        clearFilterM(state){
            state.filterData = Array.from(state.data);
        },
        setViewFilmM(state, e){
            state.viewFilm = e;
            state.loaded = true
            state.err = null;
        }
    },
})

export default store

