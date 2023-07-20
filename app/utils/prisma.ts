import { PrismaClient } from '@prisma/client';
import { sqlLogger } from './log';

const prisma = new PrismaClient({
    errorFormat: 'pretty',
    log: [
        { level: 'warn', emit: 'event' },
        { level: 'info', emit: 'event' },
        { level: 'error', emit: 'event' },
        { level: 'query', emit: 'event' },
    ],
});

prisma.$on('warn', e => sqlLogger.warn(e));
prisma.$on('info', e => sqlLogger.info(e));
prisma.$on('error', e => sqlLogger.error(e));
prisma.$on('query', e => sqlLogger.info(e));

export default prisma;
