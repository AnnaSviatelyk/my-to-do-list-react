import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Task from './Task'

configure({ adapter: new Adapter() })

describe('<Task />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Task />)
    })











})