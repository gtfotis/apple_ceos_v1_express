const express = require('express');
const router = express.Router();
const ceoModel = require('../model/db');

router.get('/:slug?', (req, res) => {
    // same as
    // if (req.params.slug exists === true)
    if (!!req.params.slug) {
        const executive = ceoModel.find(ceo => ceo.slug === req.params.slug);
        res.render('template', {
            locals: {
                title: 'CEO Details',
                ceo: executive
            },
            partials: {
                body: 'partials/ceo-details'
            }
        })
    } else {
        res.render('template', {
            locals: {
                title: 'This is not an Apple CEO',
                data: ceoModel,
            },
            partials: {
                body: 'partials/ceo-list'
            }
        });
    }
});

module.exports = router;