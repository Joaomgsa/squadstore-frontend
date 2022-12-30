import logo from '../../../assets/img/logo.png';
import {Link} from 'react-router-dom';
import { IconContext } from "react-icons";
import {GrLocation} from 'react-icons/gr';
import {RiShoppingCartLine} from 'react-icons/ri';
import { useState } from 'react';
import './index.css';

export default function TopNav(){

    const[typedProduct, setTypedProduct] = useState('');

    return(
        <div className='topNav'>
            <ul>
               <li>
                    <Link to="/">
                        <img src={logo} alt='squadlogo'/>
                    </Link>
               </li> 
               <li>
                    <Link to="/users">
                        <div>
                            <IconContext.Provider value={{ color: "white"}}>
                            <GrLocation size={32}/> selecione o seu endereço.
                            </IconContext.Provider>
                        </div>
                    
                    </Link>
               </li>
               <li>
                <div>
                    <form>
                        <input width={300}
                        value={typedProduct}
                        placeholder="Digite o produto"
                        />
                        <button type='submit'>
                        <>
                            Buscar
                        </>
                        </button>
                    </form>
                </div>
               </li>
               <li>
                <Link to="/cart">
                    <RiShoppingCartLine size={32} value={{color:"white"}}/>
                </Link>
               </li>
            </ul>
        </div>
    );
}