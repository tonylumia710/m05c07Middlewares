const path = require("path");
module.exports = {
  index: (req, res) => {
    return res.sendFile(path.join(__dirname, "..", "views/index.html"));
  },
  admin: (req, res) => {  
        return res.send("Hola Admin: "+req.query.user);
  },

  
};
