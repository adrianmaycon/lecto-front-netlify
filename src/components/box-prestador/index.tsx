/* Style */
import './style.scss';


/* Imagens*/
import fullStar from '../../assets/fullStar.svg';

type collaboratorsType = {
    id: string,
    name: string,
    email: string,
    phone: string,
    stars: number,
    photo: any,
    description: string,
    alternativeText: string
}

export function BoxPrestador({ id, name, email, phone, stars, photo, description, alternativeText }: collaboratorsType) {
    let starsAvaliacoes = []
    for (let star = 0; star < stars; star++) {
        starsAvaliacoes.push(<img className="starsCollaborator" alt='star' src={fullStar}></img>)
    }

    return (
        <div className="boxCollaborator">
            <h3>{id}. {name}</h3>
            <div className="boxAvaliacao">
                {starsAvaliacoes}
            </div>
            <div className="imagemCollaborator">
                <img src={photo} alt={alternativeText} width={760} height={330} />
            </div>
            <p className='descriptionCollaborator'>{description}</p>
        </div>
    )
}