const displayOptions = {
    closeButton: true
};

const showToastr = function (title, message, levelFunc) {
    if (!this.toastrContainer[levelFunc] || !(this.toastrContainer[levelFunc] instanceof Function)) {
        throw 'Invalid toastr call!';
    }

    if (message instanceof Object) {
        message = JSON.stringify(message);
    }
    if (title instanceof Object) {
        title = JSON.stringify(title);
    }

    this.toastrContainer[levelFunc](title, message, displayOptions);
};

export default class logger {
    constructor(tContainer) {
        //todo - get from state store
        this.toastrContainer = tContainer;
    }

    success(title, message) {
        showToastr.call(this, title, message, 'success');
    }

    warning(title, message) {
        showToastr.call(this, title, message, 'warning');
    }

    error(title, message) {
        showToastr.call(this, title, message, 'error');
    }

    info(title, message) {
        showToastr.call(this, title, message, 'info');
    }
};