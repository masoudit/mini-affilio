import axios from "axios";

// import { QueryClient, QueryClientProvider } from "react-query";
import { DEFAULT_LOCALE } from "../../utils/constants/configConstants";

// import { logOut } from "./utils";

export const LOCAL_STORAGE = {
  RETURN_URL: "return_url",
  USER_ID: "user_id",
};

// const baseApiUrl = "https://client-api-stage.affilio.ir";

// console.log("axios.defaults.proxy----", axios.defaults.proxy);
// axios.defaults.proxy.host = baseApiUrl;
// axios.defaults.baseURL = baseApiUrl + "/api/v1.0";
axios.defaults.baseURL = "/api/v1.0";
axios.defaults.headers.common[
  "Culture"
] = `${DEFAULT_LOCALE}-${DEFAULT_LOCALE.toUpperCase()}`;
// console.log("v-----", `${DEFAULT_LOCALE}-${DEFAULT_LOCALE.toUpperCase()}`);
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.interceptors.response.use(
  (res) => res,
  (err) => {
    // err?.response?.status === 401 && logOut();
    return Promise.reject(err);
  }
);

// A mock function to mimic making an async request for data
export function baseAPI(data) {
  const { method, headers, body, endPoint, isPublic } = data;
  const headers_ = { ...axios.defaults.headers.common, ...(headers || {}) };
  return axios({
    url: `${endPoint}`,
    // headers: isPublic ? headers_ : headers_,
    headers: headers_,
    method: method || "POST",
    data: body,
  });
}

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: Number.POSITIVE_INFINITY,
//       cacheTime: Number.POSITIVE_INFINITY,
//       staleTime: Number.POSITIVE_INFINITY,
//       keepPreviousData: true,
//       refetchOnMount: false,
//       refetchOnReconnect: false,
//       refetchOnWindowFocus: false,
//     },
//   },
// });

// export const FetcherProvider: FC = ({ children }) => {
//   return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
// };
