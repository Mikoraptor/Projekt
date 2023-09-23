import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const AdvertisementPage = ({AdvertisementPage}) => {
    
    const [advInfo, setAdvInfo] = useState(null)
    const {id} = useParams()

    if (advInfo === null) {
        AdvertisementPage(id).then((value) => {
            setAdvInfo(value)
        })

        return <></>
    }

    //console.log(advInfo)
    if (advInfo === undefined) {
        return(
            <div className='NonAdv'>
                <h1>Nie znaleziono ogłoszenia</h1>
            </div>
        )
    } else {
        return (
            <div className='container'>
                <div className='AdvMain'>
                    <h2>{advInfo.name}</h2>
                    <p>{advInfo.description}</p>
                </div>
                <div className='AdvInfos'>
                    <h1>Dane Kontaktowe</h1>
                    <h3>Miasto:</h3>
                    <p>{advInfo.city}</p>
                    <h3>Ulica:</h3>
                    <p>{advInfo.address}</p>
                    <h3>telefon:</h3>
                    <p>{advInfo.phone}</p>
                    <h3>Adres email</h3>
                    <p>{advInfo.email}</p>
                </div>
            </div>
        )
    }
    

}

export default AdvertisementPage;
