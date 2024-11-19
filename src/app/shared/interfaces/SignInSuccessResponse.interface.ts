import { ITokens } from "./tokens.interface";

export interface ISignInSuccessResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: ITokens;
}
