
// validate all fields 
export const SignupFields = (req, res, next) => {
    const { email, password } = req.body;
    if (email && password) {
        next();
    }
    else {
        res.status(400).json({ status: false, message: "all fields are required" });
    }
}
export const SigninFields = (req, res, next) => {
    const { email, password } = req.body;
    // email - regx
    if (email && password) {
        next();
    } else {
        res.status(400).json({ status: false, message: "all fields are required" })
    }
}

export const OtpFields = (req, res, next) => {
    const { email, otp } = req.body;
    if (email && otp) {
        next();
    }
    else {
        res.json({ status: false, message: "Please enter otp" });
    }
}