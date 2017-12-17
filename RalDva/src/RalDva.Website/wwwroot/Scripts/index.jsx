import React from 'react';
import ReactDom from 'react-dom';

import TestMenu from './test/testMenu.jsx';
import testData from './test/testData.jsx';

ReactDom.render(
    <TestMenu recipes={testData}
          title="Delicious Recipes"/>,
    document.getElementById("react-container")
);