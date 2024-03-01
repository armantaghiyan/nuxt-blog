import type {UseFetchOptions} from '#app';
import {defu} from 'defu';
import {errorToast} from '~/utils/toastify';

type UseCustomFetch = {
    url: string,
    options?: UseFetchOptions<any>,
    success?: (res: any) => void,
    error_validation?: (errors: any) => void,
}

export function useCustomFetch<T>({url, options, success, error_validation}: UseCustomFetch) {
    const config = useAppConfig()
    const api_token = useCookie('api_token')


    const defaults: UseFetchOptions<T> = {
        baseURL: config.baseURL as string,
        key: url as string,

        headers: api_token.value ? {Authorization: `Bearer ${api_token.value}`} : {},

        onResponse(_ctx) {
            const response = _ctx.response?._data;

            if (response.result === 'success') {
                if(success){
                    success(response);
                }
            }

            if (response.result === 'error_message') {
                errorToast(response.message);
            }

            if (response.result === 'error_validation') {
                if(error_validation){
                    error_validation(response.errors);
                }
            }
        },

        onResponseError(_ctx) {
        }
    }

    const params = defu(options?? {}, defaults);

    return useFetch(url, params);
}
