const keys = require('../config/keys');
const strip = require("stripe")(keys.stripeSecretKey);

module.exports = app => {
    app.post('/api/stripe', async (req, res) => {
        const charge = await strip.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 emails',
            source: req.body.id
        });

        req.user.credits += 5;
        const user = await req.user.save();
    });
};