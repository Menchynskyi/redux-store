import React from 'react';
import './Spinner.css';

const Spinner = () => (
    <div className="lds-css ng-scope spinner">
        <div className="lds-rolling">
            <div></div>
        </div>
    </div>
);

export default Spinner;