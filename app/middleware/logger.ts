import { accessLogger, defaultLogger } from '@/utils/log';
import { Context, Next } from 'koa';

/**
 * 中间件 - 日志记录
 */
export default async function (ctx: Context, next: Next) {
    ctx.logger = defaultLogger;

    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);

    const body = JSON.stringify(ctx.request.body);
    const ua = ctx.request.get('user-agent');
    accessLogger.info(`[${ctx.method}] ${ctx.url} [body] => ${body} [ua] => ${ua} - ${ms}ms`);
}
