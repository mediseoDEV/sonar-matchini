import express from 'express';

import { matches,amie, rome,notamie,notamieeee} from '../controllers/matche.js';
const router = express.Router();
router
.route('/matches/:User1_param/:User2_param')
.post(matches);
router
.route('/amie/:userid')
.post(amie);

router
.route('/rome/:User1_param1/:User2_param2')
.post(rome);
router
.route('/notamie/:userid')
.post(notamie);
router
.route('/notamieeee/:userid')
.post(notamieeee);
export default router;

