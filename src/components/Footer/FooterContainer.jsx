import {connect} from "react-redux"
import Footer from "./Footer";

const mapStateToProps = state => (
    {
        author: state.footer.author,
        phoneNumber: state.footer.phoneNumber
    }
)

const FooterContainer = connect(mapStateToProps)(Footer)

export default FooterContainer