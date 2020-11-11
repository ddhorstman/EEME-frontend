import axios, { AxiosRequestConfig } from "axios";
import { config } from "../config";

const baseURL = config.backendUrl;

/**
 * A function to perform axios calls which automatically include
 * an authorization token specified by the "token" key in localStorage.
 * @param {AxiosRequestConfig} [options] The options to be passed to axios.create()
 */
export function axiosWithAuth(options?: AxiosRequestConfig) {
  let token = localStorage.getItem("token");
  if (token === null) {
    throw new Error(
      `No token found. axiosWithAuth requires a token to be placed in localStorage under the "token" key.`
    );
  }
  try {
    //parse a JSON-encoded token, such as one created by useLocalStorage
    token = JSON.parse(token);
    //console.log(`Found stringified token in localStorage: ${token}`);
  } catch {
    //console.log(`Found non-stringified token in localStorage: ${token}`);
  }
  return axios.create({
    baseURL,
    ...options,
    headers: {
      ...options?.headers,
      Authorization: token,
    },
  });
}

/**
 * A function to perform axios calls similarly to axiosWithAuth,
 * but without automatically including an authorization token.
 * @param {object} [options] The options to be passed to axios.create()
 */
export function axiosWithoutAuth(options?: AxiosRequestConfig) {
  return axios.create({
    baseURL,
    ...options,
  });
}

/**
 * Create an axios instance which automatically includes
 * an authorization token specified by the "token" key in
 * localStorage as well as the ability to cancel the call
 * if the component unmounts.
 * @param {AxiosRequestConfig} [options] The options to pass on to axios.create()
 */
export function axiosCancellable(options?: AxiosRequestConfig) {
  let source = axios.CancelToken.source();
  let unmountedInternal = false;

  /**
   * @returns {boolean} Whether the component has been unmounted
   */
  const unmounted = (): boolean => unmountedInternal;

  /**
   * A function to cancel the API call in progress and
   * prevent any downstream changes based on the unmounted() property.
   * Call in componentWillUnmount() or return from useEffect().
   */
  const cancelAPICall = () => {
    unmountedInternal = true;
    source.cancel("Component unmounted. Data fetching cancelled.");
  };

  /**
   * A function to perform axios calls which automatically include
   * an authorization token specified by the "token" key in
   * localStorage as well as the ability to cancel the call
   * if the component unmounts using cancelAPICall().
   * @param {AxiosRequestConfig | undefined} [optionsInner] The options to be passed to axios.create()
   */
  const axiosWithAuthC = (
    optionsInner: AxiosRequestConfig | undefined = options
  ) => axiosWithAuth({ ...optionsInner, cancelToken: source.token });

  /**
   * A function to perform axios calls with the ability to cancel the call
   * if the component unmounts using cancelAPICall().
   * @param {AxiosRequestConfig | undefined} [optionsInner] The options to be passed to axios.create()
   */
  const axiosWithoutAuthC = (
    optionsInner: AxiosRequestConfig | undefined = options
  ) => axiosWithoutAuth({ ...optionsInner, cancelToken: source.token });

  return {
    isCancel: axios.isCancel,
    unmounted,
    axiosWithAuth: axiosWithAuthC,
    axiosWithoutAuth: axiosWithoutAuthC,
    cancelAPICall,
  };
}

export default axiosWithAuth;
