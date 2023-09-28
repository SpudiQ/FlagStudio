import { useRuntimeConfig } from "#app";

const getToken = () => {
    const accessToken = useCookie('accessToken');

    return accessToken.value ? accessToken.value : "";
};

export const useFetchAsyncData = async (route: string, query: object | undefined = undefined) => {
    const urlApi = useRuntimeConfig().public.apiUrl

    return await $fetch(`${urlApi}/${route}`, {
        query: query,
        headers: {
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
            Authorization: `Bearer ${getToken()}`,
        },
        onRequest({ request, options }) {
            // Set the request headers
            options.headers = options.headers || {}
        },
        onResponse({ request, response, options }) {
            // Process the response data
            // @ts-ignore
            return response.data
        },
    })
}

export const usePostAsyncData = async (route: string, data: object | undefined = undefined) => {
    const urlApi = useRuntimeConfig().public.apiUrl

    return await $fetch(`${urlApi}/${route}`, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
        },
        body: JSON.stringify(data),
        onRequest({request, options}) {
            // Set the request headers
            options.headers = options.headers || {}
        },
        onResponse({request, response, options}) {
            return response._data
        },
        onResponseError({request, response, options}) {
            // Handle the response errors
        }
    })
}