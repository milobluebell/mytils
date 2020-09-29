import { IExtendsResponse } from '.';

/**
 * httpcode映射关系
 */
export interface IHttpcodeReflection {
  httpcode: number | symbol | number[];
  message: string;
}

/**
 * 业务错误码映射关系
 */
export interface IBussinesscodeReflection {
  bussinesscode: number | number[];
  message: string;
}

/**
 * 策略
 */
export interface IStrategy {
  httpcodeRefs?: IHttpcodeReflection[];
  codeRefs?: IBussinesscodeReflection[];
  success(res: IExtendsResponse): void;
  fail(err): void;
}
