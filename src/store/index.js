import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      colors: [
        "#d8e2dc",
        "#ffe5d9",
        "#fbfaf0",
        "#ffe9ee",
        "#ffdde4",
        "#ffffff",
      ],
      notes:JSON.parse(localStorage.getItem('notes')) || [],
    //   notes: [
    //     // {
    //     //   id: 1,
    //     //   title: "Note 1",
    //     //   description: "this is note 1",
    //     //   color: "#ff0000",
    //     // },

    //     // {
    //     //   id: 2,
    //     //   title: "Note 2",
    //     //   description: "this is note 2",
    //     //   color: "#00ff00",
    //     // },
    //   ],

      filterColor:"",

    }
  },
  getters: {
      noteCountByColor(state){
        return state.colors.map(color => {
            return{
                color,
                noteCount:state.notes.filter(note=>note.color === color).length
            }
        })
      },
      count(state){
          return state.notes.length 
      },
      filteredNotes(state){
        if(state.filterColor == ""){
            return state.notes
        }
        return state.notes.filter(note=>note.color==state.filterColor)
      }
  },

  mutations: {
    addNote(state, note) {
      state.notes.unshift(note);
    },

    filterNote(state,color){
        state.filterColor = color
    },
    deleteNote(state,id){
        state.notes = state.notes.filter(note =>note.id != id)
    }
  },
  actions: {},
});
