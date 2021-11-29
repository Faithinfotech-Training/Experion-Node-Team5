const authenticationDao = require('../dao/authentication.dao');
var authenticationController = {
    addAuthentication: addAuthentication,
    findAuthentications: findAuthentications,
    findAuthenticationById: findAuthenticationById,
    updateAuthentication: updateAuthentication,
    deleteById: deleteById
}

function addAuthentication(req, res) {
    let authentication = req.body;
    authenticationDao.create(authentication).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findAuthenticationById(req, res) {
    authenticationDao.findById(req.params.AuthenticationID).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    authenticationDao.deleteById(req.params.AuthenticationID).
        then((data) => {
            res.status(200).json({
                message: "Authentication deleted successfully",
                authentication: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateAuthentication(req, res) {
    authenticationDao.updateAuthentication(req.body, req.params.AuthenticationID).
        then((data) => {
            res.status(200).json({
                message: "Authentication updated successfully",
                authentication: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findAuthentications(req, res) {
    authenticationDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = authenticationController;