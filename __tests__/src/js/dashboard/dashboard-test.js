a
import Dashboard from "./../../../src/js/dashboard/";
import React from 'react';
import renderer from 'react-test-renderer';

it('Dashboard renders correctly', () => {
    const tree = renderer.componentDidMount(Dashboard)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
