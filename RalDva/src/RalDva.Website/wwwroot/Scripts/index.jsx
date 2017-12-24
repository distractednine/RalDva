import React from 'react';
import ReactDom from 'react-dom';

// test
import TestMenu from './test/testMenu.jsx';
import testData from './test/testData.jsx';

// components
import MainNavbar from './components/MainNavbar.jsx';
import HeaderActionPanel from './components/HeaderActionPanel.jsx';

// utils
import dataservice from './utils/dataservice.js';
import endpoints from './utils/endpoints.js';

var mainVM = null;

var callback = function (responseData)  {
    mainVM = responseData;

    ReactDom.render(
        <div>
            <MainNavbar activityCategories={mainVM.activityCategories} />
        </div>,
        document.getElementById("react-container")
    );
};

var onError = function (response) {
    alert("Error occurred!");
};

dataservice.get(endpoints.getMainPageModel, callback, onError);