import express from 'express';
import { addNewRoute, deleteRoute, getRouteByHour, getRoutes, updateRoute } from '../controllers/busRouteController.js';


const router = express.Router()


router.route('/').post(addNewRoute).get(getRoutes).put(updateRoute)

router.route('/:id').delete(deleteRoute)
router.get('/:hour', getRouteByHour)

export default router