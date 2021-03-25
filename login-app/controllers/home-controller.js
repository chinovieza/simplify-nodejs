const verifyToken = require('../utilities/verify');

const home = (req, res, next) => {
    const status = verifyToken(req);
    res.render("home", {
        data: {
            pageName: "Home",
            message: "Home page",
            class: "alert alert-primary",
            loginStatus: status
        }
    });
};

module.exports = home;