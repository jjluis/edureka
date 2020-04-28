//Snapeshot test to cpmrae the old snapshot to the new snapshot

import React from 'react';                                     //system defined
import LatestNews from '../component/home/LatestNews';         //custom component
import {create} from 'react-test-renderer';                    //system defined for rendering without DOm support

describe('LatestNews Component Snapshot', () => {   //test suite --> collection of test cases
    test("LatestNews",() => {                       //test case
        let tree = create(<LatestNews/>);           //create an object of LatestNews component
        expect(tree.toJSON()).toMatchSnapshot();    //the LatestNews snapshot json object should match the previous snapshot captured 
    })
})
