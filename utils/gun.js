import { config } from '../config.js';

var gun = Gun(config.peer);
var user = gun.user().recall({ sessionStorage: true }); 

export { gun, user }