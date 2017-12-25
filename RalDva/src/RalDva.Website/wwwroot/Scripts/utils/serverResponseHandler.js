import logger from './logger.js';

export default class serverResponseHandler{
    constructor(tContainer) {
        //todo - get from state store
        this.log = new logger(tContainer);
    }

    handleServerError = response => {
        this.log.error(response, "Error occurred"); 
    }
}