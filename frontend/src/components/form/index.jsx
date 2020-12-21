import React, { useState, useEffect } from 'react'
import OwnerServices from '../../services/owners'
import DataOwners from '../owners/index'

import './form.css'

const FormOwner = () => {
    const [owners, setOwners] = useState([])
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [percentual, setPercentual] = useState("")
    const [status, setStatus] = useState(null);

    useEffect(() => {
        fetchOwners()
    }, [])

    async function fetchOwners(){
        const response = await OwnerServices.getOwners()
        setOwners(response.data)
    }

    const HandleSubmit = async (evt) => {
        evt.preventDefault()
        try{
            const newOwner = await OwnerServices.newOwner({name: name, lastName: lastName, percentual: percentual})
            fetchOwners()
            setStatus("success")
            setName("")
            setLastName("")
            setPercentual("")
            setTimeout(() => {
                setStatus(null)
            }, 2000)
        }catch{
            setStatus("error")
            setTimeout(() => {
                setStatus(null)
            }, 2000)
        }
    }

    const deleteOwner = async (owner) => {
        await OwnerServices.deleteOwners(owner._id)
        fetchOwners()
    }

    const searchOwner = async (query) => {
        let response = await OwnerServices.searchOwners(query)
        setOwners(response.data)
    }

    return(
        <div id="content">
            <div className="form-owner">
                <div id="container">
                    <form onSubmit={HandleSubmit}>
                        <div className="form-input">
                            <div className="form-field">
                                <input 
                                type="text" 
                                name="name" 
                                placeholder="First Name"
                                value={name}
                                onChange={e => setName(e.target.value)}/>
                            </div>

                            <div className="form-field">
                                <input 
                                type="text" 
                                name="name" 
                                placeholder="Last Name"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}/>
                            </div>

                            <div className="form-field">
                                <input 
                                type="text" 
                                name="name" 
                                placeholder="Percentual"
                                value={percentual}
                                onChange={e => setPercentual(e.target.value)}/>
                            </div>

                            <div className="form-submit">
                                <button>Send</button>
                            </div>
                        </div>
                    </form>
                    <div className="message">
                        {status == "success" && 
                            <p className="success">Nova informação adicionada</p>
                        }
                        {status == "error" && 
                            <p className="error">Falha ao adicionar informação</p>
                        }
                    </div>
                </div>
            </div>
            <DataOwners owners={owners} deleteOwner={deleteOwner} searchOwner={searchOwner} fetchOwners={fetchOwners}/>
        </div>
    )
}

export default FormOwner