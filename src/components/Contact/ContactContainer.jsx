import {connect} from "react-redux"
import Contact from "./Contact";
import {addUserAC, changeEmailAC, changeNameAC, changePhoneNumberAC} from "../../BLL/reducers/contact-reducer";

const mapStateToProps = state => (
    {
        title: state.contactSection.title,
        description: state.contactSection.description,
        userData: state.contactSection.userData
    }
)

const mapDispatchToProps = dispatch => (
    {
        changeName: name => dispatch(changeNameAC(name)),
        changePhoneNumber: phoneNumber => dispatch(changePhoneNumberAC(phoneNumber)),
        changeEmail: email => dispatch(changeEmailAC(email)),
        addUser: () => dispatch(addUserAC())
    }
)

const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact)

export default ContactContainer