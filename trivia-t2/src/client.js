import { w3cwebsocket as W3CWebSocket } from "websocket";
const clientConnection = new W3CWebSocket('ws://trivia.tallerdeintegracion.cl/connect');

export default clientConnection