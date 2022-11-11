import './header.scss'
import Logo from '../../assets/alecto.png';
import Lupa from '../../assets/lupa.png'
import { useState } from 'react';

export function Header() {
    const [search, setSearch] = useState('');
    
    function handleSubmit(event){
        event.preventDefault();

        try{
            window.location.href = `https://www.lecto.com.br/busca/basica/${search}/keyword/todas-as-cidades/0#resultado`
            console.log(window.location.href)          
            
        }catch(error){
            alert('Deu erro ' + error)
        }
    }


    return (
        <div className="header">
            <div className="content"></div>
            <div className="header-logo">
                <img src={Logo} className="logo" alt="" />
            </div >
            <div className='input-search'>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='keywords' id ='keywords' autoFocus
                        value={search}
                        onChange={e=>setSearch(e.target.value)}
                        />
                    <div className='lupa-img'>
                        {/* <a href="https://www.google.com.br/">
                            <img src={Lupa} alt="" />
                        </a> */}
                        <button type='submit' name='busca'>
                                <img src={Lupa} alt="lupa icon" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}