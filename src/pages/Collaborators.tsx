import Anuncio1 from '../assets/ad1.png';
import Elemento1 from '../assets/elemento1.png'
import adsense01 from '../assets/ad-sense-01.png';
import adsense02 from '../assets/ad-sense-02.png';
import adsense03 from '../assets/ad-sense-03.png';
import Imagem01 from '../assets/imagem1.png';
import Imagem02 from '../assets/imagem2.png';
import Taboola from '../assets/taboola.png';
import Header from "../components/Header/index";
import { BoxPrestador } from '../components/box-prestador';
import { Recomendamos } from '../components/recomendamos';
import { MetaTagsSEO } from '../components/head';

import { useEffect, useState, useRef, useCallback } from "react";


import '../styles/collaborators.scss';
import { useParams } from 'react-router-dom';

const conteudoLecto = [
    {
        key: 1,
        Anuncio1: Anuncio1,
        titulo: 'Título do artigo Lorem Ipsum Met Imsoum Lorem Fox',
        Elemento1: Elemento1,
        adsense01: adsense01,
        conteudo01: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type specimen book. It has survived
      not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
      It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
       desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        adsense02: adsense02,
        adsense03: adsense03,
        subtituloh2: 'Subtitulo H2',
        tituloh3: 'Título do Item H3',
        textoImg01: `descrição dos 10 melhores ...`,
        subtituloh3: 'titulo do profissional',
        textoImg02: `Descrição do profissional`,
        tituloRecomendamos: 'H2 Recomendamos',
        Imagem01: Imagem01,
        Imagem02: Imagem02,
        conteudoRecomendamos1: 'H2 Título da matéria da recomendada aqui e pode ter até 3 linhas',
        conteudoRecomendamos2: 'H2 Título da matéria da recomendada aqui e pode ter até 3 linhas',
        conteudoRecomendamos3: 'H2 Título da matéria da recomendada aqui e pode ter até 3 linhas',
        Taboola: Taboola,
    }
]

type RecommendationType = {
    attributes: any;
    banner: string,
    title: string,
    slug: string,
    alternativeText: string,
    categorySlug: any,
    subCategorySlug: any,
}

type collaboratorsType = {
    id: string,
    name: string,
    email: string,
    phone: string,
    stars: number,
    description: string,
    photo: any,
    alternativeText: string
}

type pageDataType = {
    title: string,
    description: string,
    subTitle: string,
    subTitleh2: string,
    slug: string,
    banner?: string,
    descriptionMetaTag: string,
    category: string,
    subCategory: string,
    categorySlug: string,
}

export function Collaborators() {
    const params = useParams<string>();
    const slugPage = params.slug;

    /* Variáveis das funções dos colaboradores */
    const [collaborators, setCollaborators] = useState<collaboratorsType[]>([]);
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);
    const [pageData, setPageData] = useState<pageDataType>();

    const jsonRef = useRef<any>();
    const collaboratorArray = useRef<any[]>([]);
    const collaboratorRef = useRef<collaboratorsType[]>([]);

    /* Variáveis das funções do recomendamos */
    const [recomendamos, setRecomendamos] = useState<RecommendationType[]>([]);

    const recomendamosArray = useRef<any[]>([]);
    const recomendamosRef = useRef<RecommendationType[]>([]);

    /* Função do Recomendamos */
    function handleSetRecomendamos() {
        recomendamosArray.current?.forEach((recomendamos: RecommendationType) => {
            let recommendationMap: RecommendationType = {
                title: recomendamos.attributes.titulo,
                banner: process.env.REACT_APP_PUBLIC_API_URL + recomendamos.attributes.banner.data.attributes.url,
                slug: recomendamos.attributes.slug,
                attributes: undefined,
                alternativeText: recomendamos.attributes.banner.data.attributes.alternativeText,
                /* Esses 2 campos pegam a categoria e a subcategoria da collaborators-pages \/ */
                categorySlug: recomendamos.attributes.categories.data[0].attributes.parents.data[0].attributes.slug,
                subCategorySlug: recomendamos.attributes.categories.data[0].attributes.slug,
            }
            recomendamosRef.current.push(recommendationMap);
        });
        setRecomendamos(recomendamosRef.current);
        // Aqui em baixo eu limpo os array pra evitar lixo (se retirar vai reparar que o nosso array duplica com dados repetidos)
        recomendamosRef.current = [];
        recomendamosArray.current = [];
        return true;
    }

    // Aqui estamos usando um useCallback pra evitar um loop infinito na hora de puxar os dados da API
    // com ele, a função handleLoadCollaborators só será executada quando de fato houver uma mudança na
    // variável collaborators
    /* Função dos colaboradores */

    // Criei essa função separada de setar os valores dentro do meu array collaborators pra poder fazer essa lógica do forEach dentro do then.
    // Essa é a única forma de executar isso dentro do then, através de uma função
    function handleSetCollaborators() {
        collaboratorArray.current?.forEach((collaborator: collaboratorsType) => {
            let collaboratorObj: collaboratorsType = {
                id: collaborator.id,
                name: collaborator.name,
                email: collaborator.email,
                description: collaborator.description,
                phone: collaborator.phone,
                stars: collaborator.stars,
                photo: process.env.REACT_APP_PUBLIC_API_URL + collaborator.photo.data.attributes.url,
                alternativeText: collaborator.photo.data.attributes.alternativeText,
            }
            collaboratorRef.current.push(collaboratorObj);
        });
        setCollaborators(collaboratorRef.current);
        // Aqui em baixo eu limpo os array pra evitar lixo (se retirar vai reparar que o nosso array duplica com dados repetidos)
        collaboratorRef.current = [];
        collaboratorArray.current = [];
        return true;
    }

    // Aqui estamos usando um useCallback pra evitar um loop infinito na hora de puxar os dados da API
    // com ele, a função handleLoadCollaborators só será executada quando de fato houver uma mudança na
    // variável collaborators
    const handleLoadCollaborators = useCallback(async () => {
        // Aqui em baixo eu limpo os array pra evitar lixo (se retirar vai reparar que o nosso array duplica com dados repetidos)
        collaboratorRef.current = [];
        collaboratorArray.current = [];
        recomendamosArray.current = [];

        // Decidi usar vários then eu seguida pra evitar bugs de sincronização, uma vez que aqui usamos async await
        try {
            await fetch(`${process.env.REACT_APP_PUBLIC_API_URL}/api/collaborators-pages?filters[slug]=${slugPage}&populate=deep`).then(response => {
                return response.json();
            }).then(json => {
                jsonRef.current = json;
            }).then(a => {
                const pageMapCollab: pageDataType = {
                    title: jsonRef.current.data[0].attributes.titulo,
                    description: jsonRef.current.data[0].attributes.descricao,
                    slug: jsonRef.current.data[0].attributes.slug,
                    subTitle: jsonRef.current.data[0].attributes.subTitulo,
                    subTitleh2: jsonRef.current.data[0].attributes.subTituloDescricao,
                    banner: process.env.REACT_APP_PUBLIC_API_URL + jsonRef.current.data[0].attributes.banner.data.attributes.url,
                    descriptionMetaTag: jsonRef.current.data[0].attributes.descriptionMetaTag,
                    category: jsonRef.current.data[0].attributes.categories.data[0].attributes.parents.data[0].attributes.name,
                    subCategory: jsonRef.current.data[0].attributes.categories.data[0].attributes.name,
                    categorySlug: jsonRef.current.data[0].attributes.categories.data[0].attributes.parents.data[0].attributes.slug,
                }
                setPageData(pageMapCollab);
                collaboratorArray.current = jsonRef.current.data[0].attributes.collaborators;
                recomendamosArray.current = jsonRef.current.data[0].attributes.recommendations.data
            }).then(b => {
                return (handleSetCollaborators() && handleSetRecomendamos());
            }).then(value => {
                setTimeout(() => { setDataLoaded(value) }, 300);
            });
        } catch (error) {
            console.log('Error: ', error);
        }
    }, [slugPage]);
    /*
    O slugPage é usado como dependência no useEffect. Dessa forma, sempre que houver uma mudança
    nessa variável, a nossa página é obrigada a renderizar novamente
    Sem isso, iríamos mudar nossa slug mas a página ficaria a mesma
    */

    // Esse useEffect é ativada assim que a página é montada, ele serve apenas pra desencadear o evento da
    // função handleLoadCollaborators. Se jogássemos a lógica da handleLoadCollaborators aqui dentro, criaríamos
    // um loop infinito de fetch's e atualizações
    useEffect(() => {
        // O setTimeout aqui eu creio que não sirva pra nada, apenas usei pra debugar e deixei por aí mesmo
        setTimeout(() => { handleLoadCollaborators() }, 300);
        //setTimeout(() => { handleLoadRecomendamos() }, 300);
        // Se olhar o warning, aqui deve apontar que deveríamos colocar o handleLoadCollaborators como uma dependência
        // do useEffect, mas isso gera um loop infinito, então pode simplesmente ignorar
    }, [handleLoadCollaborators]);

    return (
        <>
            {dataLoaded && (
                <MetaTagsSEO
                    title={'Lecto - ' + pageData.title}
                    description={pageData.descriptionMetaTag}
                    image={pageData.banner}
                />
            )}
            <Header />
            <div className='container-geral'>
                <section className="container">
                    <div className="conteudo">
                        {dataLoaded && (
                            <>
                                <div className='box-ad'>
                                    <img className='anuncio-1' src={conteudoLecto[0].Anuncio1} alt="" />

                                </div>
                                <ul className='categorias'>
                                    <li>
                                        <a href="/" >
                                            Início
                                        </a>
                                    </li>
                                    <li>
                                        /
                                    </li>
                                    <li>
                                        <a href={'/' + pageData.categorySlug} >
                                            {pageData.category.charAt(0).toUpperCase() + pageData.category.slice(1)}
                                        </a>
                                    </li>
                                    <li>
                                        /
                                    </li>
                                    <li>
                                        <a href="">
                                            {pageData.subCategory.charAt(0).toUpperCase() + pageData.subCategory.slice(1)}
                                        </a>
                                    </li>
                                </ul>
                                <h1>{pageData.title}</h1>
                                <div className="banner-principal">
                                    <img src={pageData.banner} alt="AD" />
                                </div>
                                <div className="ad-sense01">
                                    <img src={conteudoLecto[0].adsense01} alt="AD" />
                                </div>
                                <div className="responsive">
                                    <div className='container-conteudo'>
                                        <div className="descricao-subtitle">

                                            <p>
                                                {pageData.description}
                                            </p>

                                            <h2>{pageData.subTitleh2}</h2>
                                        </div>

                                        {/* Inicio dos prestadores */}
                                        <div className='collaborator-section'>
                                            {collaborators.slice(0, collaborators.length).map((element, index) => {
                                                return (
                                                    <BoxPrestador
                                                        key={element.email}
                                                        id={(index + 1).toString()}
                                                        name={element.name}
                                                        email={element.email}
                                                        phone={element.phone}
                                                        stars={element.stars}
                                                        photo={element.photo}
                                                        description={element.description}
                                                        alternativeText={element.alternativeText}
                                                    />
                                                )
                                            })}
                                        </div>
                                        <div className='titulo-recomendamos'>
                                            <h2>Recomendamos</h2>
                                        </div>
                                        {dataLoaded ? (
                                            <div className='recomendamos-section'>
                                                {recomendamos.map(recomendamos => {
                                                    return (
                                                        <Recomendamos
                                                            key={recomendamos.slug}
                                                            image={recomendamos.banner}
                                                            title={recomendamos.title}
                                                            url={recomendamos.slug}
                                                            slug={recomendamos.categorySlug + '/' + recomendamos.subCategorySlug + '/' + recomendamos.slug}
                                                            alternativeText={recomendamos.alternativeText}
                                                        />
                                                    )
                                                })}
                                                <div className="taboola">
                                                    <img src={Taboola} alt="taboola" />
                                                    <img src={Taboola} alt="taboola" />
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                <h1>Loading data</h1>
                                            </div>
                                        )}
                                    </div>
                                    <div className="aside">
                                        <img src={conteudoLecto[0].adsense02} alt="AD" />
                                        <img src={conteudoLecto[0].adsense03} alt="AD" />
                                        <img src={conteudoLecto[0].adsense03} alt="AD" />
                                    </div>

                                </div>

                            </>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
}