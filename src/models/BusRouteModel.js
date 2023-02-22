import mongoose from 'mongoose';

const busRouteSchema = mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
		},
		hour: {
			type: String,
			trim: true,
			required: true,
		},
		busStops: [{
			name: {
				type: String,
				trim: true,
				required: true,
			},
			lat: {
				type: Number,
				trim: true,
				required: true,
			},
			lng: {
				type: Number,
				trim: true,
				required: true,
			}
		}]
	},
	{
		timestamps: false,
	}
);

/*
  is for reference to user colection
      type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
*/

const BusRoute = mongoose.model('BusRoute', busRouteSchema);

export default BusRoute;