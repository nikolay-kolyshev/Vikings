import {connect} from "react-redux"
import Main from "./Main";

const mapStateToProps = state => (
    {
        title: state.mainSection.title,
        description: state.mainSection.description
    }
)


const MainContainer = connect(mapStateToProps)(Main)

export default MainContainer