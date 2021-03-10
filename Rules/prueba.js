
var clientAPI;

/**
 * Describe this function...
 */
export default function prueba(clientAPI) 
{
	setInterval (function () {clientAPI.executeAction ('/SkyTM/Actions/Mensajes/prueba.action');}, 15000)
}
