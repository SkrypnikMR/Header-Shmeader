import React from 'react';
import { shallow } from 'enzyme';
import ChatDisplay from '../ChatDisplay';

describe('ChatDisplay', () => {
  const messages = [
    {
      author: 'Me',
      messageText: 'someText',
      messageTime: '123123',
    },
    {
      author: 'SkripnikMRW@gmail.com',
      messageText: 'someText',
      messageTime: '12312334',
    },
  ];
  it('Should match snapshot', () => {
    const component = shallow(<ChatDisplay
      messages={messages}
      currentUser="SkripnikMRW@gmail.com"
    />);
    expect(component.html).toMatchSnapshot();
  });
  it('Should render StChatDisplay', () => {
    const component = shallow(<ChatDisplay
      messages={messages}
      currentUser="SkripnikMRW@gmail.com"
    />);
    expect(component.find('styled__StChatDisplay')).toHaveLength(1);
  });
  it('Should render ChatMessages', () => {
    const component = shallow(<ChatDisplay
      messages={messages}
      currentUser="SkripnikMRW@gmail.com"
    />);
    expect(component.find('ChatMessages')).toHaveLength(messages.length);
  });
});
