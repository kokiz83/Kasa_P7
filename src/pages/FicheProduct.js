import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Collabse from '../components/Collabse';
import Footer from '../components/Footer';

import Host from '../components/Host';
import Rating from '../components/Rating';
import Slider from '../components/Slider';
import Tags from '../components/Tags';

import products from "../dataAPI/dataProduct.json"
import Error from './Error';

export default function FicheProduct() {
   
    const { id } = useParams();
  

    const [productData] = useState(products.find((product) => product.id === id))

   
    if(!productData){
       return <Error/>

    }
    const { title, location, tags, host, rating, pictures,equipments,description } =
    productData;
    return (
        <>
        <main>
            <Slider slides={pictures} />
            <section className='title_Tag_Host_Rating'>
                <div className='title_Tag'>
                    <div className='title'>
                        <h1>{title} </h1>
                        <p>{location} </p>
                    </div>
                    <div className='get-Tag'>
                        {tags.map((tag, index) => (
                      <Tags key={index} getTag={tag} />
                        ))}
                    </div>
                </div>
                <div className='host_rating'>
                    <Host getHost={host} />
                    <Rating  getRating={rating} />
                </div>

            </section>
            <section className='collapse'>
        
                 <Collabse title="Description" content={description}/> 
                 
                <Collabse title="Equipments" content={equipments}/>     
                  
            </section>
        
        </main>
            <Footer/>
</>
    );
};
