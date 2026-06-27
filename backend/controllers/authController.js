const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
    try {
        console.log(req.body);

        const existingUser = await User.findOne({
            email: req.body.email
        });

        console.log(existingUser);

        if (existingUser) {
            return res.status(400).json({
                message: "user already exists"
            }
            )
        };

        const hashedPassword = await bcrypt.hash(
            req.body.password,
            10
        );
        console.log(hashedPassword);

        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        console.log(user);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
};

const login = async (req, res) => {

    try {
        const user = await User.findOne({
            email: req.body.email
        })

        console.log(user);

        if (!user) {
            return res.status(401).json({
                message: "Invalid credentials"
            })
        }
        console.log(req.body);

        const isMatch = await bcrypt.compare(
            req.body.password,
            user.password
        )
        console.log(isMatch);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials"
            })
        }

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        return res.status(200).json({
            token
        });

    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }



}

module.exports = {
    signup, login
};