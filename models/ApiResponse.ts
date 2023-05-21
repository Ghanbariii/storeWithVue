export interface ApiResponse<TData> {
[x: string]: any;
    isSuccess: boolean;
    data:TData | null;
    metaData: MetaData;
}

export interface MetaData{
    message:string;
    appStatusCode:AppStatusCode;
}
export enum AppStatusCode {
    success = 1,
    NotFound = 2,
    BadRequest = 3,
    LogicError = 4,
    UnAthorize = 5,
    ServerError,

}