import { useEffect, useState, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import Anuncio1 from '../assets/ad1.png';
import Elemento1 from '../assets/elemento1.png'
import adsense01 from '../assets/ad-sense-01.png';
import adsense02 from '../assets/ad-sense-02.png';
import adsense03 from '../assets/ad-sense-03.png';
import Imagem01 from '../assets/imagem1.png';
import Imagem02 from '../assets/imagem2.png';
import Taboola from '../assets/taboola.png';
import Header from "../components/Header/index";
import { MetaTagsSEO } from '../components/head';
import '../styles/home.scss';

type SubCategoriesType = {
    name: string,
    slug: any,
    collaborators_pages: any,
}

type CategoriesType = {
    name: string,
    slug: string,
    subCategory: SubCategoriesType[],
    attributes: any,
    titulo: any,
    data: any
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
    subtitle: string,
    subtitleh2: string,
    slug: string,
    banner?: string,
    descriptionMetaTag: string,
    category: string,
    subCategory: string,
}

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

export function Home() {

    /* Variáveis das funções da categoria */
    const [categories, setCategories] = useState<CategoriesType[]>([]);
    const [dataLoaded, setDataLoaded] = useState<boolean>(false);

    const jsonCategoryRef = useRef<any>();
    const categoryArray = useRef<any[]>([]);
    const categoryRef = useRef<CategoriesType[]>([]);
    const saveCategoryRef = useRef<CategoriesType[]>([]);

    function handleSetCategorys() {
        categoryArray.current?.forEach((categorie: CategoriesType) => {
            let categoryObj: CategoriesType = {
                name: categorie.name,
                slug: categorie.slug,
                subCategory: categorie.subCategory,
                attributes: categorie.attributes,
                titulo: categorie.titulo,
                data: categorie.data,
            }
            categoryRef.current.push(categoryObj);
        });
        setCategories(categoryRef.current);
        // Aqui em baixo eu limpo os array pra evitar lixo (se retirar vai reparar que o nosso array duplica com dados repetidos)
        categoryRef.current = [];
        categoryArray.current = [];
        return true;
    }

    const params = useParams<string>();
    const slugPage = params.slug;

    /* Variáveis das funções dos colaboradores */
    const [collaborators, setCollaborators] = useState<collaboratorsType[]>([]);
    const [pageData, setPageData] = useState<pageDataType>();

    const jsonRef = useRef<any>();
    const collaboratorArray = useRef<any[]>([]);
    const collaboratorRef = useRef<collaboratorsType[]>([]);

    const handleLoadCategories = useCallback(async () => {
        // Aqui em baixo eu limpo os array pra evitar lixo (se retirar vai reparar que o nosso array duplica com dados repetidos)
        categoryRef.current = [];
        categoryArray.current = [];

        // Decidi usar vários then eu seguida pra evitar bugs de sincronização, uma vez que aqui usamos async await
        try {
            await fetch(`${process.env.REACT_APP_PUBLIC_API_URL}/api/collaborators-pages?populate=deep`).then(response => {
                return response.json();
            }).then(json => {
                jsonCategoryRef.current = json;
            }).then(a => {
                saveCategoryRef.current = jsonCategoryRef.current.data;
            }).then(b => {
                return (handleSetCategorys());
            }).then(value => {
                setTimeout(() => { setDataLoaded(value) }, 300);
            });
        } catch (error) {
            console.log('Error: ', error);
        }
    }, []);

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

        // Decidi usar vários then eu seguida pra evitar bugs de sincronização, uma vez que aqui usamos async await
        try {
            await fetch(`${process.env.REACT_APP_PUBLIC_API_URL}/api/collaborators-pages?populate=deep`).then(response => {
                return response.json();
            }).then(json => {
                jsonRef.current = json;
            }).then(a => {
                const pageMapCollab: pageDataType = {
                    title: jsonRef.current.data[0].attributes.titulo,
                    description: jsonRef.current.data[0].attributes.description,
                    slug: jsonRef.current.data[0].attributes.slug,
                    subtitle: jsonRef.current.data[0].attributes.subTitulo,
                    subtitleh2: jsonRef.current.data[0].attributes.subTitleH2,
                    banner: process.env.REACT_APP_PUBLIC_API_URL + jsonRef.current.data[0].attributes.banner.data.attributes.url,
                    descriptionMetaTag: jsonRef.current.data[0].attributes.descriptionMetaTag,
                    category: jsonRef.current.data[0].attributes.categoria,
                    subCategory: jsonRef.current.data[0].attributes.subCategoria,
                }
                setPageData(pageMapCollab);
                collaboratorArray.current = jsonRef.current.data;
            }).then(b => {
                return (handleSetCollaborators() && handleSetCategorys());
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
        setTimeout(() => { (handleLoadCollaborators() && handleLoadCategories()) }, 300);
        //setTimeout(() => { handleLoadRecomendamos() }, 300);
        // Se olhar o warning, aqui deve apontar que deveríamos colocar o handleLoadCollaborators como uma dependência
        // do useEffect, mas isso gera um loop infinito, então pode simplesmente ignorar
    }, [handleLoadCollaborators, handleLoadCategories]);

    /* Dicionário responsável por armazenar nossas categorias e subcategorias */
    const categoriesElements = {
        categoriesName: [],
        subCategoriesNames: [],
        parentsName: [],
    }

    /* Map usado para armazenar os informações de saveCategoryRef no nosso objeto categoriesElements, o mesmo evita duplicação dentro do Array e deixa o novo array + organizado,
    evitando assim ter que fazer vários loops um dentro do outro. */
    {
        saveCategoryRef.current.map((categorie) => {
            categorie.attributes.categories.data.map((subCategoria) => {
                if (!categoriesElements.subCategoriesNames.includes(subCategoria.attributes.name)) {
                    categoriesElements.subCategoriesNames.push(subCategoria.attributes.name) // Salvando o nome das SubCategorias no objeto -> Pizzarias e Academias
                    categoriesElements.parentsName.push(subCategoria.attributes.name);
                }
                subCategoria.attributes.parents.data.map((categoria) => {
                    if (!categoriesElements.categoriesName.includes(categoria.attributes.name)) {
                        categoriesElements.categoriesName.push(categoria.attributes.name); // Salvando o nome das Categorias no objeto      -> Alimentação e Vida e Saúde
                    }
                })

            })
            return (
                null
            )
        })
    }


    var itensSubCategorias = []; // Variável responsável por evitar a duplicação das subCategorias na tela

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
            {dataLoaded && (
                <div className='container-geral'>
                    <section className="container">
                        <div className="conteudo">
                            <div className='box-ad'>
                                <img className='anuncio-1' src={conteudoLecto[0].Anuncio1} alt="" />
                            </div>
                            {/* <h1>{pageData.title}</h1> */}
                            <p className='subtitulo'>Confira os melhores serviços, separados por Categorias</p>
                            <div className="ad-sense01">
                                <img src={conteudoLecto[0].adsense01} alt="AD" />
                            </div>
                            <div className="responsive">
                                <div className='container-recomendamos'>
                                    {/* Sort \/ para deixar as categorias em ordem alfabéticas */}
                                    {categoriesElements.categoriesName.sort(function (a, b) {

                                        return a.localeCompare(b);
                                    }).map((categorias) => {
                                        return (
                                            <div>
                                                {/* Propriedades para a Categoria começar com letra maiúscula */}
                                                <h2>{categorias.charAt(0).toUpperCase() + categorias.slice(1)}</h2>  { /* Retorna o nome da categoria, por ex: Alimentação e Vida e Saúde com a 1ª letra maiúscula */}
                                                {/* Sort \/ para deixar as Sub Categorias em ordem alfabéticas */}
                                                {saveCategoryRef.current.sort(function (a, b) {
                                                    return a.attributes.categories.data[0].attributes.name.localeCompare(b.attributes.categories.data[0].attributes.name);
                                                }).map((subCategorias) => {
                                                    /* Essa condicional verifica se a subCategoria é da mesma categoria pai, por ex:
                                                Se pizzarias tiver o pai Alimentação retorna True, se não retorna false e não exibe o conteúdo
                                                Evitando assim, que alguma subCategoria seja exibida dentro de uma categoria errada
                                                Também tem outra condicional que evita que duplique subcategorias, a variável itensSubCategorias vai armazenando os nomes das categorias
                                                Caso a categoria não tenha sido add nessa variável, ela adiciona e exibe o conteúdo*/
                                                    if (subCategorias.attributes.categories.data[0].attributes.parents.data[0].attributes.name == categorias && !itensSubCategorias.includes(subCategorias.attributes.categories.data[0].attributes.name)) {
                                                        itensSubCategorias.push(subCategorias.attributes.categories.data[0].attributes.name);
                                                        return (
                                                            <div>
                                                                <div>
                                                                    {/* Propriedades para a SubCategoria começar com letra maiúscula */}
                                                                    <h3>{subCategorias.attributes.categories.data[0].attributes.name.charAt(0).toUpperCase() + subCategorias.attributes.categories.data[0].attributes.name.slice(1)}</h3> {/* Retorna as Subcategorias, por ex: Pizzarias e Academias com a 1ª letra maiúscula */}
                                                                </div>
                                                                <div className="box-categorias">
                                                                    {
                                                                        saveCategoryRef.current.map((listas, index) => {
                                                                            /* Essa condicional garante que as subCategorias seja iguais, tanto a da categoria, quanto a da subcategoria */
                                                                            if (listas.attributes.categories.data[0].attributes.name == subCategorias.attributes.categories.data[0].attributes.name) {
                                                                                return (
                                                                                    /* Aqui é a parte que renderiza os cards dos collaborators-page, ex: Melhores pizzarias de Sc, melhores academias, etc */
                                                                                    <div>
                                                                                        <a href={subCategorias.attributes.categories.data[0].attributes.parents.data[0].attributes.slug + '/' + subCategorias.attributes.categories.data[0].attributes.slug + '/' + listas.attributes.slug} style={{ textTransform: 'none', color: '#000' }}>
                                                                                            <img src={process.env.REACT_APP_PUBLIC_API_URL + listas.attributes.banner.data.attributes.url} alt="" />
                                                                                            <h2>
                                                                                                {listas.attributes.titulo}
                                                                                            </h2>
                                                                                        </a>

                                                                                    </div>
                                                                                )
                                                                            }
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                })}
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="aside aside-home">
                                    <img src={conteudoLecto[0].adsense02} alt="AD" />
                                    <img src={conteudoLecto[0].adsense03} alt="AD" />
                                    <img src={conteudoLecto[0].adsense03} alt="AD" />
                                </div>

                            </div>
                        </div>
                    </section>
                </div >
            )
            }

        </>
    );
}

