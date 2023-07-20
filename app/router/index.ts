import Router from '@koa/router';
import homepage from './homepage';

/**
 * 路由
 */
const router = new Router();

router.use(homepage.routes(), homepage.allowedMethods());

export default router;
