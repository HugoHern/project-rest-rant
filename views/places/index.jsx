const React = require('react')
const Def = require('./default')

function index (data) {
    let placesFormatted = data.places.map((places) => {
        return(
            <div className='col-sm-6'>
                <h2>
                    <a href={`/places/${index}`}>
                        {places.name}
                    </a>
                </h2>
                <p className='text-center'>
                    {places.cuisines}
                </p>
                <img src={places.pic} alt={places.name} />
                <p className='text-center'>
                    Located in {places.city}, {places.state}
                </p>
            </div>
        )
    })

    return(
        <Def>
            <main>
                <h1>PLACES TO RANT ABOUT</h1>
                <div className='row'>
                    {placesFormatted}
                </div>
                
            </main>
        </Def>
    )
       
}


module.exports = index
