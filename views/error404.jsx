const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <main>
            <h1>404: You Got Lost!!!</h1>
            <p>Oops! We cant find the page!</p>
        </main>
    )
}

module.exports = error404
