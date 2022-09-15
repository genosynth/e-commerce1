import React from 'react'

import Item from './Item';


function Items({items,update}) {

    return(
        
        items.map(item => {

            return <Item key={item.name} item={item} update={update} />                      

        })    


    ) 
 
}

export default Items