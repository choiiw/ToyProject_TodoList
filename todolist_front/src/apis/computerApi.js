import api from "./instance";

export async function GetComputerApi(id) {
    let response = null;

    try {
        response = await api.get(`/computer/${id}`);
    }catch(e){
        console.error(e);
        response = e.response.data;
    }

    return response;
}

export async function GetComputerListApi() {
    let response = null;

    try {
        response = await api.get(`/computers`,{params});
    }catch(e){
        console.error(e);
        response = e.response.data;
    }

    return response;
}