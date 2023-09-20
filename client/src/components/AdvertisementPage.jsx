import { useState } from 'react'
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

    console.log(advInfo)
    return(
        <h1>{advInfo.name}</h1>
    )

}

export default AdvertisementPage;
