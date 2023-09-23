import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const Advertisements = ({ Advertisements }) => {

    const [advPage, setAdvPage] = useState(null)
    const {page} = useParams()
    

    if (advPage === null) {
        Advertisements(page).then((value) => {
            setAdvPage(value)
            
        })
        return <></>
    }

    /* advPage.forEach(element => {
        
        console.log(element.name)
            
        }) */

    return (
        
        <div className="container" >
            {
                advPage.map(element => {
                    console.log(element.name)
                    return (<Link className='Adv' to={'/AdvertisementPage/' + element.id}>
                        <h3>{element.name}</h3>
                        <p>{element.city}</p>
                    </Link>)
                })
            }
        </div>
       
    )

}

export default Advertisements;
