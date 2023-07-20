import Koa from 'koa';
import cors from '@koa/cors';
import serve from 'koa-static';
import { bodyParser } from '@koa/bodyparser';
import 'dotenv/config';

import router from './router';
import response from './middleware/response';
import logger from './middleware/logger';
import { errorLogger } from './utils/log';

// 实例
const app = new Koa();
const PORT = process.env.PORT ?? 5000;

// 中间件
app.use(cors());
app.use(bodyParser());
app.use(serve(process.cwd() + '/static'));

// 自定义中间件
app.use(response);
app.use(logger);

// 路由
app.use(router.routes()).use(router.allowedMethods());

// 全局报错
app.on('error', err => errorLogger.error(err));
app.on('error-info', err => errorLogger.error(err));

// 启动
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
