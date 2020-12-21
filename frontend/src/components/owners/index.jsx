import React, { useState } from 'react'
import CanvasJSReact from '../../assets/canvas';
import './owners.css'
import { BsFillTrashFill, BsSearch } from 'react-icons/bs' 
import { AiOutlineClose } from 'react-icons/ai'

const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const DataOwners = (props) => {

    const [query, setQuery] = useState("")

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            props.searchOwner(query)
        }
      }

    const graphicOptions = {
        animationEnabled: true,
        title:{
            text: "Owners Percentual participation"
        },
        data: [{
            type: "pie",
            showInLegend: true,
            legendText: "{label}",
            toolTipContent: "{label}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            indexLabelPlacement: "inside",
            dataPoints: props.owners.map(owner => (
                {y: owner.percentual, label: owner.name}
            ))
        }]
    }

    return(
        <div className="dataOwners">
            <div id="container">
                <div className="title">
                    <h1>Owners Percentual</h1>
                    <p>Registre novos membros, e gere o gráfico de sua porcentagem automaticamente</p>
                </div>
                <div className="search">
                    <div className="form-search">
                        <input 
                        type="text" 
                        name="search" 
                        placeholder="Pesquisar"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}/>
                    </div>
                    <div className="button-search">
                        <button onClick={() => {
                            props.fetchOwners()
                            setQuery('')
                        }
                        }><AiOutlineClose size={20}/></button>
                    </div>
                </div>
                <div className="information">
                    <div className="table">
                        <table >
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Percentual</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.owners.map((owner, key) => 
                                    <tr key={key}>
                                        <td>{key+1}</td>
                                        <td>{owner.name}</td>
                                        <td>{owner.lastName}</td>
                                        <td>{owner.percentual}%</td>
                                        <td onClick={() => {
                                            props.deleteOwner(owner)
                                            setQuery('')
                                        }
                                        } className="delete"><BsFillTrashFill size={20}/></td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </div>
                    <div className="graphic">

                        <CanvasJSChart options={graphicOptions} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataOwners