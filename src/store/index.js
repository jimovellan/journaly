import { createStore } from "vuex";
import journalStore from '../modules/daybook/store/journal'

const store = createStore({
    modules:
    {
        journal:journalStore
    } 
    
})

export default store