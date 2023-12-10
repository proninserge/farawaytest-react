import { action, makeObservable, observable } from "mobx";
import { axiosInstance } from "../axios";
import qs from "query-string";

enum RESTMethod {
  post = "post",
  get = "get",
}

type StatusData<R> = {
  isFetching: boolean;
  isFetched: boolean;
  error: null | Error;
  response: null | R;
};

type Status = {
  [key in keyof typeof RESTMethod]: StatusData<unknown>;
};

type RequesArgs = {
  resource: string;
  params?: object | string;
  data?: any;
};

const statusTemplate = {
  isFetching: false,
  isFetched: false,
  error: null,
  response: null,
};

const getInitialStatus = (): Status => {
  return {
    [RESTMethod.get]: { ...statusTemplate },
    [RESTMethod.post]: { ...statusTemplate },
  };
};

export class RESTService {
  // @observable
  @observable.deep
    status: any = {};

  getStatus(resource: string) {
    if (this.status[resource] === undefined) {
      this.status[resource] = getInitialStatus();
    }

    return this.status[resource];
  }

  constructor(private readonly config: { url: string }) {
    makeObservable(this);
    this.getStatus = this.getStatus.bind(this);
  }

  @action.bound
  private async request<R>(args: {
    method: keyof typeof RESTMethod;
    resource: string;
    params?: object | string;
    data?: any;
    fetch?: any;
    headers?: object;
  }) {
    const {
      method,
      resource = "",
      params = {},
      data = null,
      fetch,
      headers = {},
    } = args;

    let queryParams;

    if ((params as string).length) {
      queryParams = params;
    } else {
      queryParams = qs.stringify(params as object);
    }

    const url =
      this.config.url +
      "/" +
      resource +
      `${queryParams ? "?" + queryParams : ""}`;

    if (this.status[resource] === undefined) {
      this.status[resource] = getInitialStatus();
    }

    const statusRef = this.status[resource][method];
    statusRef.isFetching = true;

    const retrievedHeaders = {
      ...headers,
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization: `Token ${Cookies.get("accessToken")}`,
    };

    try {
      const request: any = fetch
        ? fetch(url, {
          body: data,
          baseUrl: "",
          headers: retrievedHeaders,
        })
        : axiosInstance[method](url, data, { headers: retrievedHeaders });

      const response = await request;
      // Here we can add an adapter to camelCase object_keys
      // Snake_casing we can add for all methods requiring push body to the server
      statusRef.response = response.data as R;
      return statusRef;
    } catch (error) {
      statusRef.error = error as Error;
    } finally {
      statusRef.isFetched = true;
      statusRef.isFetching = false;
    }
  }

  @action.bound
  async get<R>(args: Omit<RequesArgs, "data">): Promise<StatusData<R>> {
    return await this.request<R>({ method: RESTMethod.get, ...args });
  }

  @action.bound
  async post<R>(args: RequesArgs): Promise<StatusData<R>> {
    return await this.request<R>({ method: RESTMethod.post, ...args });
  }

  @action.bound
  reset(resource: string, method?: keyof typeof RESTMethod) {
    if (method) {
      this.status[resource][method] = {
        isFetching: false,
        isFetched: false,
        error: null,
        response: null,
      };
      return;
    }

    this.status[resource] = getInitialStatus();
  }
}
