import IndexController from '@/controllers/homepage/IndexController';
import Router from '@koa/router';

/**
 * homepage 路由
 */
const homepage = new Router({ prefix: '/homepage' });

homepage.post('/init', IndexController.init);
homepage.post('/report', IndexController.report);
homepage.post('/history', IndexController.history);

export default homepage;
