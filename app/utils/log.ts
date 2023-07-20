import * as log4js from 'log4js';
import path from 'path';

// 项目根目录
const rootDir = process.cwd();

// 文件大小，1M
const size = 1024 * 1000 * 100;
// 备份文件数量
const backups = 10;

log4js.configure({
    appenders: {
        info: {
            type: 'file',
            filename: path.join(rootDir, 'logs/info/info.log'),
            maxLogSize: size,
            backups: backups,
        },
        error: {
            type: 'file',
            filename: path.join(rootDir, 'logs/error/error.log'),
            maxLogSize: size,
            backups: backups,
        },
        access: {
            type: 'file',
            filename: path.join(rootDir, 'logs/access/access.log'),
            maxLogSize: size,
            backups: backups,
        },
        sql: {
            type: 'file',
            filename: path.join(rootDir, 'logs/sql/sql.log'),
            maxLogSize: size,
            backups: backups,
        },
        console: {
            type: 'console',
            layout: { type: 'coloured' },
        },
    },
    categories: {
        info: { appenders: ['info'], level: 'all' },
        error: { appenders: ['error'], level: 'all' },
        access: { appenders: ['access'], level: 'all' },
        sql: { appenders: ['sql'], level: 'all' },
        default: { appenders: ['console', 'info'], level: 'all' },
    },
});

/** 请求日志 */
export const accessLogger = log4js.getLogger('access');
/** sql 日志 */
export const sqlLogger = log4js.getLogger('sql');
/** 错误日志 */
export const errorLogger = log4js.getLogger('error');
/** 日志 */
export const defaultLogger = log4js.getLogger();
