import { Context, Next } from 'koa';

/**
 * 中间件 - 封装响应方法
 */
export default async (ctx: Context, next: Next) => {
    ctx.success = (data?: unknown, msg = 'success', code = 0) => {
        ctx.body = { code, msg, data };
    };
    ctx.fail = (msg = 'fail', code = 1) => {
        ctx.body = { code, msg };
    };
    await next();
};
