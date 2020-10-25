import {connect} from "react-redux"
import Header from "./Header"
import {toggleThemeAC} from "../../BLL/reducers/themeUI-reducer";

const mapStateToProps = state => (
    {
        phoneNumber: state.header.phoneNumber,
    }
)

const mapDispatchToProps = dispatch => (
    {
        toggleTheme: () => dispatch(toggleThemeAC())
    }
)

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer