import logo from '../../../assets/img/logo.png';
import {Link} from 'react-router-dom';
import {GrLocation} from 'react-icons/gr';
import {RiShoppingCartLine} from 'react-icons/ri';
import { useState } from 'react';

export default function TopNav(){

    const[typedProduct, setTypedProduct] = useState('');

    return(
        <>
        <div>
            <ul>
               <li>
                    <Link to="/">
                        <img src={logo} alt='squadlogo'/>
                    </Link>
               </li> 
               <li>
                    <Link to="/users">
                        <GrLocation size={32} /> selecione o seu endereço.
                    </Link>
               </li>
               <li>
                <form>
                    <input 
                    value={typedProduct}
                    placeholder="Digite o produto"
                    />
                    <button type='submit'>
                       <>
                        Buscar
                       </>
                    </button>
                </form>
               </li>
               <li>
                <Link to="/cart">
                    <RiShoppingCartLine size={32}/>
                </Link>
               </li>
            </ul>
        </div>
        </>
    );
}