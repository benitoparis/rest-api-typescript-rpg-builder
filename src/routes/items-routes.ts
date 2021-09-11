import { Router } from 'express';

const itemsRouter = Router();


itemsRouter.get('/', (req, res)=> {
    res.json([{name: "fd"}, {name: "re"}]);
});
itemsRouter.get('/:id', (req, res)=> {
    res.json({name: "fd."});
});

export default itemsRouter;