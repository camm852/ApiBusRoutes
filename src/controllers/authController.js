import User from '../models/UserModel.js'
import {createHash} from "node:crypto"

const login = async (req, res) => {

  try {
    const {email, password} = req.body;
    const userStored = await User.findOne({
      where: {email: email}
    })

    if(userStored === null) throw new Error
    const passwordHash =  createHash('sha256').update(password).digest('hex')
    if(userStored.password !== passwordHash.toString()) throw new Error()
    return res.json({name: userStored.name, email: userStored.email})
  } catch (
    error
  ) {
    return res.status(404).json({msg: "auth failed"})
  }
}

export {login}