import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';

import App from '../src/app';
import RepoList from '../src/repoList';

chai.use(chaiEnzyme);

describe('Component: App', () => {
  it('calls componentDidMount()', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('calls makeRequest() from componentDidMount()', () => {
    sinon.spy(App.makeRequest, 'makeRequest');
    const wrapper = mount(<App/>);
    expect(App.makeRequest.calledOnce).to.equal(true);
  });

  describe('App-query-button', () => {
    it('should render a query button', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('App-query-button'));
    });
    it('should call makeRequest() when clicked');
  });

  describe('App-body', () => {
    it('should render a div with "App-body" class', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(<RepoList/>));
    });
  });
});
