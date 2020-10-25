import {connect} from "react-redux"
import App from "./App";

const mapStateToProps = state => (
    {
        theme: state.themeUI.theme
    }
)


const AppContainer = connect(mapStateToProps)(App)

export default AppContainer