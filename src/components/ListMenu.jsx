import React, { useMemo } from 'react'
import { useFetch } from '../hooks/useFetch';

export const ListMenu = ({idProduct, productDescription, isAlergic}) => {
  
    /**Memo para el estado del boton presionado*/
    const memoValue = useMemo(() => isAlergic, [isAlergic])

    /**Fetch para datos de Alergia*/
    const {data} = useFetch(`http://ts.colet.es:51508/api/Allergenic/GetAllergenic/52/${idProduct}`);
    const list2 = !!data && data[`${idProduct} alergens`]; 

  return (
    <>
        <div className='ml-10 mt-5'>
            <div className='flex gap-2'>
                <p>{idProduct}:</p>
                <p>{productDescription}</p>
            </div>  

            

            <div className='flex gap-2'>
            {
              memoValue && <p>ALERGENS:</p>
            }
            {
                    memoValue && list2.map(item => (
                        
                        <p key={item.allergenId}>{item.name},</p>
                    ))
            }
            </div>
        </div>
    </>
  )
}
