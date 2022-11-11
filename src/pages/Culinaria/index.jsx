// import React, { useEffect, useState } from 'react';
// import Header from '../../components/Header';
import { Container, ContainerBody, Title, Card } from './styled';
import Header from "../../components/Header/index";
import ad1 from '../../assets/ad1.png';
import adsLarge from '../../assets/ads-large.jpg';
import adsMedium from '../../assets/adsMedium.jpg';
// import axios from 'axios';

export default function Culinaria() {
    // const [banner, setBanner] = useState('');
    // const [description, setDescription] = useState('');

    // useEffect(() => {
    //     // axios.get(`${process.env.NEXT_PUBLIC_API_URL}/home`)
    //     axios.get(`https://romulofroes-cms.doois.com.br/home`)
    //         .then((response) => {
    //             // console.log(response.data);
    //             setBanner(response.data.banner.url)
    //             setDescription(response.data.descriptionImage)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }, [])

    return (
        <Container>
            <Header />

            <ContainerBody>
                <div className='page-cont'>
                    <div className='box-anun'>
                        <a href='https://www.voegol.com.br/' target='blank' style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <img title='Anúncio Gol - as melhores ofertas para você' className='anun-all' src={ad1} alt="" />
                        </a>
                    </div>

                    <div className='main-info'>
                        <div className='entry-crumbs'>
                            <a href='/'><slug>Início</slug></a>
                            <slug style={{margin: '0 8px'}}> / </slug>
                            <a href='/ribeirao-preto'><slug>Ribeirão Preto</slug></a>
                            <slug style={{margin: '0 8px'}}> / </slug>
                            <a href='/ribeirao-preto/culinaria'><slug>Culinária</slug></a>
                        </div>

                        <Title>Gastronomia em Ribeirão Preto</Title>
                        <p className='description-title'>Confira a gastronomia em Ribeirão Preto</p>

                        <div style={{height: 200, width: '100%', background: '#333', marginTop: '20px'}}>
                            <img className='adsLarge' src={adsLarge} alt="google-ads" />
                        </div>

                        <h2 className='h2-title'>Onde comer em Ribeirão Preto</h2>

                        <div className='container-infos'>
                            <div className='container-links-category'>
                                <a href='/ribeirao-preto/culinaria/onde-comer-em-reibeirao-preto'>
                                    <Card>
                                        <img className='image-banner' src={'https://static.wixstatic.com/media/f2c816_0415049946dc4a8abf6ef897efd18c49~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_560,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DAN_0529.jpg'} alt="" />
                                        <h2 className='subtitle-card'>A presença de frutos do mar na culinária de Ribeirão Preto é...</h2>
                                    </Card>
                                </a>

                                <a href='/ribeirao-preto/culinaria/onde-comer-em-reibeirao-preto'>
                                    <Card>
                                        <img className='image-banner' src={'https://media.revide.com.br/cache/cd/43/cd43bab4af0d44666437dbe1112b3f0e.jpg'} alt="" />
                                        <h2 className='subtitle-card'>A presença de frutos do mar na culinária de Ribeirão Preto é...</h2>
                                    </Card>
                                </a>

                                <a href='/ribeirao-preto/culinaria/onde-comer-em-reibeirao-preto'>
                                    <Card>
                                        <img className='image-banner' src={'https://i0.wp.com/varaldiverso.com.br/wp-content/uploads/2022/03/Comida-di-Buteco-2022-Ribeirao-Preto-Varal-Diverso-Fotos-Renata-Prado-Divulgacao.png?fit=1920%2C1080&ssl=1'} alt="" />
                                        <h2 className='subtitle-card'>A presença de frutos do mar na culinária de Ribeirão Preto é...</h2>
                                    </Card>
                                </a>

                                <a href='/ribeirao-preto/culinaria/onde-comer-em-reibeirao-preto'>
                                    <Card>
                                        <img className='image-banner' src={'https://media-cdn.tripadvisor.com/media/photo-s/12/1a/a9/1b/unidade-ll.jpg'} alt="" />
                                        <h2 className='subtitle-card'>A presença de frutos do mar na culinária de Ribeirão Preto é...</h2>
                                    </Card>
                                </a>

                                <a href='/ribeirao-preto/culinaria/onde-comer-em-reibeirao-preto'>
                                    <Card>
                                        <img className='image-banner' src={'data:image/jpeg;base64,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'} alt="" />
                                        <h2 className='subtitle-card'>A presença de frutos do mar na culinária de Ribeirão Preto é...</h2>
                                    </Card>
                                </a>

                                <a href='/ribeirao-preto/culinaria/onde-comer-em-reibeirao-preto'>
                                    <Card>
                                        <img className='image-banner' src={'https://media.revide.com.br/cache/f1/5d/f15d110888cf1b81d18386812a4e50dd.jpg'} alt="" />
                                        <h2 className='subtitle-card'>A presença de frutos do mar na culinária de Ribeirão Preto é...</h2>
                                    </Card>
                                </a>

                                <a href='/ribeirao-preto/culinaria/onde-comer-em-reibeirao-preto'>
                                    <Card>
                                        <img className='image-banner' src={'https://julianarangel.news/wp-content/uploads/2021/07/359fadcb-cd61-4af2-b292-c2f96c1fbc11-1024x683.jpg'} alt="" />
                                        <h2 className='subtitle-card'>A presença de frutos do mar na culinária de Ribeirão Preto é...</h2>
                                    </Card>
                                </a>

                                <a href='/ribeirao-preto/culinaria/onde-comer-em-reibeirao-preto'>
                                    <Card>
                                        <img className='image-banner' src={'https://static.wixstatic.com/media/f2c816_0415049946dc4a8abf6ef897efd18c49~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_560,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DAN_0529.jpg'} alt="" />
                                        <h2 className='subtitle-card'>A presença de frutos do mar na culinária de Ribeirão Preto é...</h2>
                                    </Card>
                                </a>

                                <a href='/ribeirao-preto/culinaria/onde-comer-em-reibeirao-preto'>
                                    <Card>
                                        <img className='image-banner' src={'https://media-cdn.tripadvisor.com/media/photo-p/15/ab/d0/82/photo0jpg.jpg'} alt="" />
                                        <h2 className='subtitle-card'>A presença de frutos do mar na culinária de Ribeirão Preto é...</h2>
                                    </Card>
                                </a>
                            </div>
                            <div>
                                <img className='adsLarge' style={{marginBottom: 20}} src={adsLarge} alt="google-ads" />

                                <img className='adsMedium' style={{marginBottom: 20}} src={adsMedium} alt="google-ads" />

                                <img className='adsMedium' src={adsMedium} alt="google-ads" />
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerBody>
            {/* <main>
                <img className="banner-home" src={banner} alt={description} />
                <span>{description}</span>
            </main> */}
        </Container>
    );
}