import './style.scss';

type RecomendamosType = {
    image: any,
    title: string,
    url: string,
    slug: string,
    alternativeText: string
}

export function Recomendamos({ image, title, url, slug, alternativeText }: RecomendamosType) {
    return (
        <div className="box-recomendamos">
            <a className='link-recomendamos' href={`/` + slug}>
                <div className='recomendamos'>
                    <img src={image} alt={alternativeText} />
                    <h2>{title}</h2>
                </div>
            </a>
        </div >
    )
}

