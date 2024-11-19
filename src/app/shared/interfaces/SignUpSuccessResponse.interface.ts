import { ITokens } from "./tokens.interface";

export interface ISignUpSuccessResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: ITokens;
}
