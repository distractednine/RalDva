import React from 'react';
import ReactDom from 'react-dom';

// test
import TestMenu from './test/testMenu.jsx';
import testData from './test/testData.jsx';

// components
import MainNavbar from './components/mainNavbar.jsx';

// utils
import dataservice from './utils/dataservice.js';
import endpoints from './utils/endpoints.js';

var mainVM = null;

const callback = (responseData) => {
    mainVM = responseData;

    ReactDom.render(
        <MainNavbar activityCategories={mainVM.activityCategories}/>,
        document.getElementById("react-container")
    );
};

dataservice.get(endpoints.getMainPageModel, callback);



/*
<TestMenu recipes={testData}
title="Delicious Recipes"/>,
document.getElementById("react-container")*/