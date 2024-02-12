const router = require('express').Router()
// GET /places

app.get('/', (req, res) => {
    let places = [{
        name: 'Cat Cafe',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'Coffee, Small Meals',
    }, {
        name: 'Puppy Parlor',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'Dog Food',
    }]
    res.render('places/index', { places})
})
module.exports = router