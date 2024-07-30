import api from "./instance";

export async function GetListApi(id) {
    let response = null;

    try {
        response = await api.get(`/todolist/${id}`);
    }catch(e){
        console.error(e);
        response = e.response.data;
    }

    return response;
}

export async function GetListsApi() {
    let response = null;

    try {
        response = await api.get(`/todolists`,{params});
    }catch(e){
        console.error(e);
        response = e.response.data;
    }

    return response;
}