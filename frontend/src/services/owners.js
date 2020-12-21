import axios from 'axios'

import Api from './api'

const OwnerServices = {
    newOwner: (params) => Api.post("/", params),

    getOwners: () => Api.get('/'),

    deleteOwners: (id) => Api.delete(`/${id}`),

    searchOwners: (query) => Api.get(`/search?query=${query}`)
}

export default OwnerServices