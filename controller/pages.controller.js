
var Pages = require('../api/pages/pages.model')

module.exports.findByLoginId = (req, res) => {
    var loginId = req.user.loginId
    return Pages.find({ loginId: loginId }).exec()
}

// Gets a single Pages from the DB
module.exports.findById = (id) => {
    return Pages.findById(id).exec()
}
