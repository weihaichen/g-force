const db = require('../models/index');
const undergraduate = db.undergraduates;

exports.findAll = (req,res) => {
    undergraduate.findAll().then(undergraduates=>{

        res.send(undergraduates);
    });
};

