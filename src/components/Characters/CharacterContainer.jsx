import {connect} from "react-redux"
import Characters from "./Characters";

const mapStateToProps = state => (
    {
        title: state.charactersSection.title,
        subtitle: state.charactersSection.subtitle,
        description: state.charactersSection.description,
        characters: state.charactersSection.characters,
    }
)


const CharactersContainer = connect(mapStateToProps)(Characters)

export default CharactersContainer