import React from 'react';
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    //test1
    it('renders', () => {
        render(<About />);
    })
    //test2cul
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About/>);
        expect(asFragment()).toMatchSnapshot();
    })
})