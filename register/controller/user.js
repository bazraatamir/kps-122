const user = require("../model/user")
exports.register = async (req, res) => {
    try {
        const userData = await user.create(req.body);
        res.send(userData)
    } catch (error) {
        res.send(error)
    }
    
  }