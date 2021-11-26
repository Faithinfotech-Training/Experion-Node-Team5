const bookDao = require('../dao/cms.dao');
var bookController = {
    addRole: addRole,
    findRoles: findRoles,
    findRoleById: findRoleById,
    updateRole: updateRole,
    deleteById: deleteById
}

function addRole(req, res) {
    let book = req.body;
    bookDao.create(book).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findRoleById(req, res) {
    bookDao.findById(req.params.RoleID).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    bookDao.deleteById(req.params.RoleID).
        then((data) => {
            res.status(200).json({
                message: "Role deleted successfully",
                book: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateRole(req, res) {
    bookDao.updateRole(req.body, req.params.RoleID).
        then((data) => {
            res.status(200).json({
                message: "Role updated successfully",
                book: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findRoles(req, res) {
    bookDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = bookController;