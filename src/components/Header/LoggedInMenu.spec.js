import React from 'react'
import {mount} from 'enzyme'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import LoggedInMenu from './LoggedInMenu'
import MenuItem from 'material-ui/MenuItem'
import IconMenu from 'material-ui/IconMenu'

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

describe('<LoggedInMenu />', () => {
  it ('render', () => {

    const wrapper = mount(<MuiThemeProvider><LoggedInMenu /></MuiThemeProvider>)
    expect(wrapper.find(IconMenu).length).toBe(1)

    //FIXME: can't simulate touchTap event yet to open the menu popup so we can inspect
    // expect(wrapper.find(MenuItem).length).toBe(2)
  })  
})
