import asyncHandler from "../middleware/asyncHandler.js";
import User from "../Model/userModel.js";

//@desc Auth user and get token
//@route POST /api/users/login
//@access Public
const authUser = asyncHandler(async (req, res) => {
   res.send('auth user');
})

//@desc  Register users
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
    res.send('register user');
})

//@desc  Logout user/ clear cookies
//@route POST /api/users/logout
//@access private
const logoutUser = asyncHandler(async (req, res) => {
    res.send('logout user');
})

//@desc  Get user profile
//@route GET /api/users/profile
//@access private
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile');
})

//@desc  Update user profile
//@route PUT /api/users/profile
//@access private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user profile');
})

//@desc  Get user 
//@route GET /api/users
//@access private/admin
const getUsers = asyncHandler(async (req, res) => {
    res.send('get user');
})

//@desc  Get user by id
//@route GET /api/users
//@access private/admin
const getUserById = asyncHandler(async (req, res) => {
    res.send('get user by id');
})

//@desc  Delete user 
//@route DELETE /api/users/:id
//@access private/admin
const deleteUser = asyncHandler(async (req, res) => {
    res.send('delete user');
})

//@desc  Update user 
//@route DELETE /api/users/:id
//@access private/admin
const updateUser = asyncHandler(async (req, res) => {
    res.send('udpate user');
})
export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserById,
    deleteUser,
    updateUser
}