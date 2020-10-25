import avatar1 from "./../../assets/images/1.svg"
import avatar2 from "./../../assets/images/2.svg"
import avatar3 from "./../../assets/images/3.svg"
import avatar4 from "./../../assets/images/4.svg"

const initialState = {
    title: "Главные персонажи",
    subtitle: "О лучших из лучших",
    description: `Персонажи "Викингов" имеют множество граней характера и не дадут
                  зрителю усомниться в их уникальности. Каждая сюжетная линяя прописана
                  с филигранным мастерством и любовью к своему делу без намёка на
                  клишированность. Вы будете сопереживать каждому герою сериала.`,
    characters: [
        {
            id: 1,
            name: "Рагнар Лодброк",
            avatar: avatar1
        },
        {
            id: 2,
            name: "Лагерта Лодброк",
            avatar: avatar2
        },
        {
            id: 3,
            name: "Флоки Вильгердарсон",
            avatar: avatar3
        },
        {
            id: 4,
            name: "Бьёрн Железнобокий",
            avatar: avatar4
        }
    ]

}

const charactersReducer = (state = initialState, action) => {

    switch (action.type) {

        default:
            return state

    }


}

export default charactersReducer