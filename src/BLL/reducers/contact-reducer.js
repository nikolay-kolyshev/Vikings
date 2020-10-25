const CHANGE_NAME = "CHANGE_NAME"
const CHANGE_PHONE_NUMBER = "CHANGE_PHONE_NUMBER"
const CHANGE_EMAIL = "CHANGE_EMAIL"
const ADD_USER = "ADD_USER"

const initialState = {
    title: "Заинтересовались сериалом?",
    description: "Оставьте свои данные, и мы с вами свяжемся",
    userData: {
        name: "",
        phoneNumber: "",
        email: ""
    },
    users: []
}

const contactReducer = (state = initialState, action) => {

    switch (action.type) {

        case CHANGE_NAME:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    name: action.name
                }
            }

        case CHANGE_PHONE_NUMBER:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    phoneNumber: action.phoneNumber
                }
            }

        case CHANGE_EMAIL:
            return {
                ...state,
                userData: {
                    ...state.userData,
                    email: action.email
                }
            }

        case ADD_USER:
            if (state.userData.name || state.userData.phoneNumber || state.userData.email)
                return {
                    ...state,
                    userData: {
                        ...state.userData,
                        name: "",
                        phoneNumber: "",
                        email: ""
                    },
                    users: [
                        ...state.users,
                        {
                            id: (state.users.length) ? state.users[state.users.length-1].id + 1 : 1,
                            name: state.userData.name,
                            phoneNumber: state.userData.phoneNumber,
                            email: state.userData.email
                        }
                    ]
                }
            else return state

        default:
            return state
    }

}

export const changeNameAC = name => ({
    type: CHANGE_NAME,
    name
})

export const changePhoneNumberAC = phoneNumber => ({
    type: CHANGE_PHONE_NUMBER,
    phoneNumber
})

export const changeEmailAC = email => ({
    type: CHANGE_EMAIL,
    email
})

export const addUserAC = () => ({
    type: ADD_USER
})

export default contactReducer