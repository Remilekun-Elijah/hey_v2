const express = require( 'express' ),
 app = express();

app.set( 'view engine', 'ejs' );
app.set( 'views', 'views' )
app.use( express.json() )
app.use( express.urlencoded( { extended: false } ) );



app.use( express.static( 'public' ) );

app.get( '/', ( req, res ) => {
 res.render( 'index' );
} );

app.get("/user/auth", (req, res) => {
    res.render("signup");
})

app.listen( process.env.PORT || 3000, e => console.log( 'app running on port 3000' ) );