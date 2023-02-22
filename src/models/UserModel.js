import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
		},
		email: {
			type: String,
			trim: true,
			required: true,
		},
		password: {
      type: String,
      trim: true,
      required: true
    }
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

const User = mongoose.model('User', UserSchema);

export default User;