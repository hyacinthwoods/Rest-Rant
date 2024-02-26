const React = require('react')
const Def = require ('./default')


function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src='images/hamburger.jpg' alt="hamburger" width="600px"/>
                    <div class='hambuger'>
                    Photo by <a href="https://unsplash.com/@briewilly?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Chad Montano</a> on <a href="https://unsplash.com/photos/burgers--GFCYhoRe48?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
            </a>
            </main>
        </Def>
    )
}

module.exports = home