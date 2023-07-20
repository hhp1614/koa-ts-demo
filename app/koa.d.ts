import { PrismaClient } from '@prisma/client';
import 'koa';
import log4js from 'log4js';

declare module 'koa' {
    interface Context {
        /**
         * 返回成功
         * @param data 返回的数据
         * @param msg 返回的消息，默认 success
         * @param code 返回的状态码，默认 200
         */
        success(data?: unknown, msg?: string, code?: number): void;
        /**
         * 返回失败
         * @param msg 返回的消息，默认 fail
         * @param code 返回的状态码，默认 400
         */
        fail(msg: string, code?: number): void;
        /**
         * 日志
         */
        logger: log4js.Logger;
    }
}
