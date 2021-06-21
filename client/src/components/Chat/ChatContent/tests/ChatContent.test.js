import React from 'react';
import ChatContent from '../ChatContent';

describe('ChatContent', () => {
    it('Should match snapshot', () => {
        const component = (<ChatContent />);
        expect(component.html).toMatchSnapshot();
    });
});
