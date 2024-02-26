const router = require('express').Router()
const places = require('../models/places.js')
// GET /places

router.get('/new', (req, res) => {
    res.render('places/new')
  })  

  router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error')
    }
    res.render('places/show', {place: places[id], id})
  })  

router.get('/', (req, res) => {
    let places = [{
        name: 'Cat Cafe',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'Coffee, Small Meals',
        pic: '/images/cat.jpg'
    }, {
        name: 'Puppy Parlor',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'Dog Food',
        pic: '/images/dog.jpg'
    }]
    res.render('places/index', { places})
})

router.post('/', (req, res) => {
    if (!req.body.pic) {
        //default image in the case of none 
        req.body.pic = '../images/kitten.jpg'
    }
    if (!req.body.city) {
        req.body.city = 'Somewhere'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  
module.exports = router