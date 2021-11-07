const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();

const router = new Router();

// router.get('/peopleList', async (ctx) => {
//     console.log('我进来了')
//     console.log(ctx);
//     ctx.body = {
//         data: 1,
//     }
// });
const len = 20;
router.get('/peopleList', async(ctx) => {
    // ctx.type = 'application/json';
    console.log(ctx.query);
    const arr =[];
    for (let i = 0; i < len; i++) {
        arr.push({
            userName: 'xxx',
            userId: 'xxx',
        })
    }
    ctx.body = {
        data: arr,
    };
});
app.use(router.routes());

app.listen(8081, () => {
    console.log('我在监听8081');
});
