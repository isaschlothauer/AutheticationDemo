import { Router, Request, Response } from 'express';
import accountCreationController from './accountCreation/account-creation.controller'
import { newAccountValidation } from '../middlewares/new-account-validation';

// const api = Router()
//   .use(accountCreationController)

//   export default Router().use('/api', api);


// router.post("/api/register", (req: Request, res: Response) => {
//   console.log(req.body);
// })

// export default router;

  // const api = router
  //   .use(accountCreationController);

  const api = Router()
    .use('/register', newAccountValidation, accountCreationController);

  export default Router().use('/api', api);