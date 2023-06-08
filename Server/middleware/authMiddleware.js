import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../Model/userModel.js";

//protect routes
const protect = asyncHandler(async (req, res, next) => {
    let token;

    token = req.cookies.jwt

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select("-password")
            next();
        } catch (e) {
            console.log(e);
            res.status(401).json({ message: 'Not authorized, token failed' })

        }
    } else {
        res.status(401).json({ message: 'Not authorized, no token' })
    }
})

//Admin middleware

const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401).json({ message: 'Not authorized as admin' })

    }
}

export { protect, admin }