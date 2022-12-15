import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useFetch } from '../hooks/useFetch';
import { changeAlergic, changeNotAlergic } from '../store/alergic/alergicSlice';
import { ListMenu } from './ListMenu';

export const MenuPage = () => {

    /**UseFetch para data del Menu */
    const {data, isLoading} = useFetch(`http://ts.colet.es:51508/api/MenuType/GetMenuList/esp/52`); 
    /**Condicional que permite la extraccion de data */
    const list1 = !!data && data['MENÚ SUCCULENT'];  

    /**Traer el estado alergic con Redux*/
    const {status} = useSelector(state => state.alergic);
    const dispatch = useDispatch();   

    /**Memo para habilitar o deshabilitar button*/
    const isAlergic = useMemo(() => status === 'alergic', [status] );

    return (
    <div className='mt-5 w-full w-full bg-white'>

        <div className='flex justify-center'>
                <div>
                    <h1 className='font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600'>Menu</h1>
                </div>
        </div>

        <div className='flex gap-2 justify-center mt-5'>

            <button 
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' 
            onClick={() => dispatch( changeAlergic() ) }
            disabled={isAlergic}
            >Con Alergenos</button>

            <button 
            className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900'
            onClick={() => dispatch ( changeNotAlergic () ) }
            >Sin Alergenos</button>

        </div>

        {
           isLoading
            ? <p>Loading ...</p>
            : list1.map(item => <ListMenu isAlergic={isAlergic} key={item.idProduct} {...item}/> )
        }


    </div>
  )
}
