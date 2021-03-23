const register = (req, res, next) => {
    res.render("register", {
        data: {
            pageName: "Register",
            message: "กรอกข้อมูลเพื่อลงทะเบียนผู้ใช้",
            class: "alert alert-primary"
        }
    });
};

module.exports.register = register;