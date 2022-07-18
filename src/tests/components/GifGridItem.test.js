import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import GifGridItem from '../../components/GifGridItem';

describe('Test Component GifGridItem', () => {
    it('renders', () => {
        const component = render(<GifGridItem />);
        expect(component).toMatchSnapshot();
    });
})