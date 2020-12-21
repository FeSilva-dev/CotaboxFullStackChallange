import React, { useEffect, useState } from 'react'
import './home.css'
import OwnerServices from '../../services/owners'

import FormOwner from '../../components/form/index'

const HomeScreen = () => {

    const [owners, setOwners] = useState([])

    useEffect(() => {
        fetchOwners()
    }, [])
    
    async function fetchOwners (){
        const response = await OwnerServices.getOwners()
        setOwners(response.data)
    }

    return(
        <div className="">
            <FormOwner />
        </div>
    )
}

export default HomeScreen