const React = require('react')
const Def = require ('./default')


function home () {
    return (
        <Def>
            <main>
                <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>
                <h1>HOME</h1>
            </main>
        </Def>
    )
}

module.exports = home