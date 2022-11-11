// import React, { useEffect, useState } from 'react';
// import Header from '../../components/Header';
import { Container, ContainerBody, Title, Card } from './styled';
import Header from "../../components/Header/index";
import ad1 from '../../assets/ad1.png';
import adsLarge from '../../assets/ads-large.jpg';
import adsMedium from '../../assets/adsMedium.jpg';
// import axios from 'axios';

export default function Onde() {
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
                            <slug style={{margin: '0 8px'}}> / </slug>
                            <a href='/ribeirao-preto/culinaria/onde-comer-em-reibeirao-preto'><slug>Onde Comer</slug></a>
                        </div>

                        <Title>Onde comer em Ribeirão Preto</Title>
                        <p className='description-title'>Confira a gastronomia em Ribeirão Preto</p>

                        <div style={{height: 200, width: '100%', background: '#333', marginTop: '20px'}}>
                            <img className='adsLarge' src={adsLarge} alt="google-ads" />
                        </div>

                        <h2 className='h2-title'>Muito prazer, somos o Compotta!</h2>

                        <div className='container-infos'>
                            <div className='container-links-category'>
                                <img className='image-banner' src={'https://static.wixstatic.com/media/f2c816_0415049946dc4a8abf6ef897efd18c49~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_560,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DAN_0529.jpg'} alt="" />
                                <p className='subtitle-card'>O Compotta é, acima de tudo, um lugar de bem-estar e tranquilidade onde podemos aproveitar a simplicidade das coisas aliadas a uma alimentação saudável.
                                <br/>
                                <br/>
                                Acreditamos que uma alimentação natural é a peça para uma vida mais equilibrada. Acreditamos na harmonia dos elementos e priorizamos a conservação dos recursos naturais e o bem-estar dos animais, com o intuito de contribuir com a melhoria na qualidade de vida dos consumidores.
                                <br/>
                                <br/>
                                Valorizamos a ética, honestidade, transparência e coerência em nossas ações e relações.
                                <br/>
                                <br/>
                                Temos como missão promover a melhor experiência possível dos clientes em relação à nossa experiência de marca. Seja nos produtos que oferecemos, seja no atendimento humano e diferenciado.</p>
                                <img style={{marginTop: 20}} className='image-banner' src={'https://static.wixstatic.com/media/f2c816_12bd1aba5b2a4129aa2e60113635e106~mv2.jpg/v1/fill/w_972,h_1368,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Menu%20Compotta%202022%20fonte%20pequena-1.jpg'} alt="" />
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