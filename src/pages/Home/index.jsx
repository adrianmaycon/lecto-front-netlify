// import React, { useEffect, useState } from 'react';
// import Header from '../../components/Header';
import { Container, ContainerBody, Title, Card } from './styled';
import Header from "../../components/Header/index";
import ad1 from '../../assets/ad1.png';
import adsLarge from '../../assets/ads-large.jpg';
import adsMedium from '../../assets/adsMedium.jpg';
// import axios from 'axios';

export default function Home() {
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
                        </div>

                        <Title>Pesquise na Lecto</Title>
                        <p className='description-title'>Aqui você encontra tudo que desejar</p>

                        <div style={{height: 200, width: '100%', background: '#333', marginTop: '20px'}}>
                            <img className='adsLarge' src={adsLarge} alt="google-ads" />
                        </div>

                        <h2 className='h2-title'>Com dúvida? Olhe nossas categorias</h2>

                        <div className='container-infos'>
                            <div className='container-links-category'>
                                <a className='link-category' href='/ribeirao-preto'>- Ribeirão Preto</a>
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