import { useEffect, useState } from "react"
import { Table } from "reactstrap";
import api from "../../services/api/api";

export default function CategoriesList(){
    const[categories, setCategories] = useState([]);

    useEffect(()=> {
        async function loadCategories() {
            const response = await api.get('/categories');
            setCategories(response.data);
        }
        loadCategories();
    },[])

    return (
        <div>
           <ul>
            {categories.map(cat =>
               <li key={cat.id}>
                {cat.name}
               </li>
               )}
           </ul>
        </div>
    );
};

