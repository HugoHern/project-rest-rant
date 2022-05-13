const React = require('react')
const Def = require('./default')

function error404 (){
    return(
        <Def>
            <main>
                <h1>404: page not found</h1>
                <p>can't find the page</p>
                <div>
                    <img src="http://placekitten.com/200/300" alt="picture of kitten" />
                </div>
            </main>
        </Def>
    )

}

module.exports = error404