const router = require('express').Router()
// GET /places

router.get('/new', (req, res) => {
    res.render('places/new')
  })  

router.get('/', (req, res) => {
    let places = [{
        name: 'Cat Cafe',
        city: 'Las Vegas',
        state: 'NV',
        cuisines: 'Coffee, Small Meals',
        pic: '/images/cafe.jpg'
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
    console.log(req.body)
    res.send('POST /places')
  })
  
module.exports = router