const router = require('express').Router();
const { Op } = require('sequelize');
const { Users } = require('../models');
const loginAuthentication = require('../utilities/authentication');

router.get('/', async (req, res) => {
    try {
        res.status(200).render('homepage', {
            loggedIn: req.session.loggedIn
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {
        
        if(req.session.loggedIn) {
            res.redirect('/profile');

            return;
        }

        res.render('login');
        
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/rooms', loginAuthentication, async (req, res) => {
    try {

        res.status(200).render('rooms', {
            loggedIn: true,
        })
        
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/profile', loginAuthentication, async (req, res) => {
    try {

        const userData = await Users.findAll({
            where: {
                id: {[Op.ne]: req.session.user_id}
            }
        });

        const users = userData.map((user) => user.get({ plain: true }));
        
    } catch (err) {
        res.status(500).json(err);
    }
});

