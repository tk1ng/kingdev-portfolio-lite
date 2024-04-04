const sendEmail = require('../utils/mailer');

const postEmail = (req, res) => {
    sendEmail(req.body)
        .then(response => {
            res.status(200).send({ message: 'Message sent!' });
        })
        .catch(err => {
            res.status(500).send({ message: 'Uh-oh, Something went wrong!' });
        });
};

module.exports = postEmail;