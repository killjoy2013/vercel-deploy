import IPerson from "../../interfaces/IPerson";

export interface IControllerContext {
  data?: [IPerson?];
}

export interface IContextProvider {
  children: any;
}

export interface IResponseType {
  results: [IPerson];
}
