// import React, { useEffect, useState } from 'react';
// import Header from '../../components/Header';
import { Container, ContainerBody, Title, Card } from './styled';
import Header from "../../components/Header/index";
import ad1 from '../../assets/ad1.png';
import adsLarge from '../../assets/ads-large.jpg';
import adsMedium from '../../assets/adsMedium.jpg';
// import axios from 'axios';

export default function Local() {
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
                        </div>

                        <Title>Ribeirão Preto</Title>
                        <p className='description-title'>Município em São Paulo</p>

                        <div style={{height: 200, width: '100%', background: '#333', marginTop: '20px'}}>
                            <img className='adsLarge' src={adsLarge} alt="google-ads" />
                        </div>

                        <h2 className='h2-title'>Onde comer em Ribeirão Preto</h2>

                        <div className='container-infos'>
                            <div className='container-links-category'>
                                <a href='/ribeirao-preto/culinaria'>
                                    <Card>
                                        <img className='image-banner' src={'https://blog.consumer.com.br/wp-content/uploads/2020/11/culin%C3%A1ria-regional-brasileira.jpg'} alt="" />
                                        <h2 className='subtitle-card'>Conheça a culinária de Ribeirão Preto.</h2>
                                    </Card>
                                </a>

                                <a href='/ribeirao-preto/culinaria'>
                                    <Card>
                                        <img className='image-banner' src={'https://www.construtorastefani.com.br/site/wp-content/uploads/2019/05/Banner-2-Blog.jpg'} alt="" />
                                        <h2 className='subtitle-card'>Veja os melhores lugares para ir em Ribeirão Preto.</h2>
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