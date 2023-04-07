const nodemailer = require("nodemailer")


const transmport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "xdhaber12@gmail.com",
        pass: "nfcwcedpykznrxde"
    }
});

module.exports = transmport;
