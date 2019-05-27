
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
host: window.location.hostname,
prefix: prefix,
port: window.location.port,
isSecure: window.location.protocol === "https:"
};
require.config( {
baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
qlik.setOnError( function ( error ) {
$( '#popupText' ).append( error.message + "<br>" );
$( '#popup' ).fadeIn( 1000 );
} );
$( "#closePopup" ).click( function () {
$( '#popup' ).hide();
} );

//callbacks -- inserted here --
//open apps -- inserted here --
var app = qlik.openApp('appId', config);

var app1 = qlik.openApp('appId', config);

//get objects -- inserted here --
app1.getObject('QV02','objectId');
app.getObject('QV01','objectId');




} );


