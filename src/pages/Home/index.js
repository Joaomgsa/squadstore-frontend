import './index.css';
import './'
import MyCarousel from '../../components/Carousel';
import ProductsCards from '../../components/ProductsCards';


export default function Home(){
    return(
        <>
            <h1>Sejam Bem vindos a SquadStore</h1>
            <MyCarousel/>
            <ProductsCards/>
        </>
        
    );
}