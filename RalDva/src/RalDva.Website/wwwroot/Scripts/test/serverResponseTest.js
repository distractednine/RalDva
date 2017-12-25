import serverResponseHandler from '../utils/serverResponseHandler.js';
import dataservice from '../utils/dataservice.js';

export default class serverResponseTest {
    constructor(tContainer) {
        //todo - get from state store
        this.responseHandler = new serverResponseHandler(tContainer);
    }

    testGet() {
        dataservice.get('/api/test/GetBadRequest', function (){}, this.responseHandler.handleServerError);        
    }

    testPost() {
        dataservice.post('/api/test/GetInternalServerError', null, function (){}, this.responseHandler.handleServerError);        
    }
}