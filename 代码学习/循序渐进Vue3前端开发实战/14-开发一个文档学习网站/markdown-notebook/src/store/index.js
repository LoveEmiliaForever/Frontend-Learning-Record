import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    selectionList: {},
    noteData: {},
    selectedSetName: '',
    selectedNoteName: ''
  },
  getters: {
  },
  mutations: {
    setSelectionList (state, payload) {
      state.selectionList = payload.selectionListData
    },
    setNoteData (state, payload) {
      state.noteData = payload.noteData
    },
    setSelectedSetName (state, payload) {
      state.selectedSetName = payload.newSetName
    },
    setSelectedNoteName (state, payload) {
      state.selectedNoteName = payload.newNoteName
    }
  },
  actions: {
    getSetSelectionList (context) {
      axios.get('/selectionList.json').then((response) => {
        context.commit({
          type: 'setSelectionList',
          selectionListData: response.data
        })
      })
    },
    getSetNoteData (context, payload) {
      axios.get('/noteData.json').then((response) => {
        context.commit({
          type: 'setNoteData',
          noteData: response.data[payload.selectedSetName][payload.selectedNoteName]
        })
      })
    }
  },
  modules: {
  }
})
