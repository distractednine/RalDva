import React from 'react';
import ReactDom from 'react-dom';
import {ToastContainer} from "react-toastr";

// test
//import TestMenu from './test/testMenu.jsx';
//import testData from './test/testData.jsx';
import serverResponseTest from './test/serverResponseTest.js';

// components
import MainNavbar from './components/MainNavbar.jsx';

// utils
import dataservice from './utils/dataservice.js';
import endpoints from './utils/endpoints.js';
import serverResponseHandler from './utils/serverResponseHandler.js';

let mainVM, toastrContainer;

let onSuccess = function (responseData)  {
    mainVM = responseData;

    ReactDom.render(
        <div>
            <MainNavbar activityCategories={mainVM.activityCategories} />
            <ToastContainer ref={ref => toastrContainer = ref} className="toast-top-right"/>
        </div>,
        document.getElementById("react-container")
    );

    //var responseHandler = new serverResponseHandler(toastrContainer);
    //responseHandler.handleServerError("");    

    let sResponseTest = new serverResponseTest(toastrContainer);
    sResponseTest.testGet();
    sResponseTest.testPost();

};

let onError = function (response) {
    alert("Error occurred!");
};

dataservice.get(endpoints.getMainPageModel, onSuccess, onError);