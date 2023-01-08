import {Link} from 'react-router-dom';


export default function ProductsCards() {
    
    function ProductCardsList(props){
        const labels = props.labels;
        const listLabels = labels.map((label)=>
        <li className="" key={label}>
            <Link to={"/"}>{label}</Link>
        </li>
        );
        return(
            <>
            <ul>
                {listLabels}
            </ul>
            </>
        );
    }
    const labels = ['Presentes de Natal', 'Renove sua Casa', 'Aproveite as Promoções','Eletronicos', 'Computadores', 'Livros'];
    
    return(
        <>
        <div>
        <ProductCardsList labels={labels} />
        </div>
        </>
    )
}