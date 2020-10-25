import {combineReducers, createStore} from "redux"
import mainReducer from "./reducers/main-reducer"
import charactersReducer from "./reducers/characters-reducer"
import contactReducer from "./reducers/contact-reducer"
import headerReducer from "./reducers/header-reducer"
import footerReducer from "./reducers/footer-reducer"
import themeUIReducer from "./reducers/themeUI-reducer";

const rootReducer = combineReducers({
    mainSection: mainReducer,
    charactersSection: charactersReducer,
    contactSection: contactReducer,
    header: headerReducer,
    footer: footerReducer,
    themeUI: themeUIReducer
})

const store = createStore(rootReducer)

window.store = store

export default store