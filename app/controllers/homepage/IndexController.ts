import prisma from '@/utils/prisma';
import { Context } from 'koa';

class IndexController {
    async init(ctx: Context) {
        ctx.success();
    }

    async report(ctx: Context) {
        const params = ctx.request.body;

        const url = new URL(params.url);
        const defPort = url.protocol.startsWith('http') ? '80' : '443';

        await prisma.history.create({
            data: {
                title: params.title,
                protocol: url.protocol,
                hostname: url.hostname,
                port: url.port || defPort,
                pathname: url.pathname,
                search: url.search,
                hash: url.hash,
                href: url.href,
            },
        });

        ctx.success();
    }

    async history(ctx: Context) {
        const { title, page, size } = ctx.request.body;
        const total = await prisma.history.count();
        const list = await prisma.history.findMany({
            where: {
                title: { contains: title },
            },
            skip: (page - 1) * size,
            take: size,
            orderBy: { createdAt: 'desc' },
        });
        ctx.success({ list, page, size, total });
    }
}

export default new IndexController();
