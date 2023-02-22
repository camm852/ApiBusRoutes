import BusRoute from '../models/BusRouteModel.js'


const addNewRoute = async (req, res) => {
  const { name, hour, busStops } = req.body;
  console.log("new route")
	try {
		const taskStored = await BusRoute.create({name, hour, busStops});
		await taskStored.save();
		return res.json(taskStored);
	} catch (error) {
		return res.status(404)
	}
}

const getRouteByHour = async (req, res) => {
  const {hour} = req.params;
  try {
    const routes = await BusRoute.find({
      hour: hour
    }).populate('busStops')
    if(hour === null) throw new Error()
    console.log(routes)
    return res.json(routes.length > 0 ? routes : null)
  } catch (error) {
    return res.status(404).json({msg: "No hay rutas disponibles"})
  }
}

const getRoutes = async (req, res) => {
  
  try {
    const routesStored = await BusRoute.find()
    console.log(routesStored)
    return res.json(routesStored)
  } catch (error) {
    return res.status(404)
  }
}



const deleteRoute = async (req, res) => {
  try {
    const routeStored = await BusRoute.findById(req.params.id);
    console.log(routeStored)
    if(routeStored === null) throw new Error()
    await routeStored.deleteOne()
    return res.status(200).json({msg: 'deleted'})
  } catch (error) {
    return res.status(404)
  }
}
  

const updateRoute = async (req, res) => {
  const { _id, name, hour, busStops } = req.body;
  try {
    const routeStored = await BusRoute.findById(_id)
    routeStored.name = name || routeStored.name;
    routeStored.hour = hour || routeStored.hour;
    routeStored.busStops = busStops || routeStored.busStops;
    await routeStored.save()
    return res.json(routeStored)
  } catch (error) {
    return res.status(404).json({msg: "error"})
  }

}
  





export {addNewRoute, getRouteByHour, getRoutes, deleteRoute, updateRoute}