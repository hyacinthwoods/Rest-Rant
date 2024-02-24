const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <main>
            <h1>404: You Got Lost!!!</h1>
                <p>Oops! We cant find the page!</p>
                    <div>
                    <img src= "/images/kitten.jpg" alt= "kitten" width="550px"/>
                    </div>
                     <div>
                     Photo by <a href="https://unsplash.com/@kotecinho?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kote Puerto</a> on <a href="https://unsplash.com/photos/white-and-gray-kitten-on-white-textile-so5nsYDOdxw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                     </div>
        </main>
    )
}

module.exports = error404
