import {GiHamburgerMenu} from 'react-icons/gi';
import {Link} from 'react-router-dom';
import './index.css';


export default function Nav(){
    
    function MenuList(props){
        const labels = props.labels;
        const listLabels = labels.map((label)=>
        <li className="navItens" key={label}>
            <Link to={"/"}>{label}</Link>
        </li>
        );
        return(
            <ul>
                {listLabels}
            </ul>
        );
        }
        const labels = ['Mais Vendidos', 'Ofertas do Dia', 'Novidades','Livros','Eletronicos', 'Ajuda ao Cliente'];
    
    return(
        <>
        <div className='nav'>
        <Link to="/">
            <GiHamburgerMenu size={32}/>
        </Link>
           <MenuList labels={labels} /> 
        </div>
        </>
    )
}