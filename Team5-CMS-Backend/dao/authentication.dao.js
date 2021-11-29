const Authentication = require('../models/authentication');
var authenticationDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateAuthentication: updateAuthentication
}

function findAll() {
    return Authentication.findAll();
}

function findById(AuthenticationID) {
    return Authentication.findByPk(AuthenticationID);
}

function deleteById(AuthenticationID) {
    return Authentication.destroy({ where: { AuthenticationID: AuthenticationID } });
}

function create(authentication) {
    var newAuthentication = new Authentication(authentication);
    return newAuthentication.save();
}

function updateAuthentication(authentication, AuthenticationID) {
    var updateAuthentication = {
        UserName : authentication.UserName,
        Password : authentication.Password,
        RoleID :  authentication.RoleID
    };
    return Authentication.update(updateAuthentication, { where: { AuthenticationID: AuthenticationID } });
}
module.exports = authenticationDao;