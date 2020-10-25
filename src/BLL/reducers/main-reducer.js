const initialState = {
    title: "Сериал \"Викинги\"",
    description: `Сериал рассказывает о главе отряда викингов Рагнаре Лодброке.
                  Он восстал, чтобы стать королём племён викингов.
                  Норвежская легенда гласит, что он был прямым потомком Одина,
                  бога войны и воинов.`
}

const mainReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state
    }

}

export default mainReducer