import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';

import App from '../src/app';
import RepoList from '../src/repoList';

chai.use(chaiEnzyme);

describe('Component: App', () => {
  describe('Post-mount', () => {
    it('calls componentDidMount()', () => {
      sinon.spy(App.prototype, 'componentDidMount');
      const wrapper = mount(<App />);
      expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
      App.prototype.componentDidMount.restore();
    });

    it('calls makeRequest() from componentDidMount()', () => {
      sinon.spy(App.prototype, 'makeRequest');
      const wrapper = mount(<App />);
      expect(App.prototype.makeRequest.calledOnce).to.equal(true);
      App.prototype.makeRequest.restore();
    });
  });

  describe('App-query-button', () => {
    it('should render a query button', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('App-query-button'));
    });
    
    it('should call makeRequest() when clicked', () => {
      sinon.spy(App.prototype, 'makeRequest');
      const wrapper = shallow(<App />);
      wrapper.find('button').simulate('click');
      expect(App.prototype.makeRequest.calledOnce).to.equal(true);
      App.prototype.makeRequest.restore();
    });
  });

  describe('App-body', () => {
    it('should render a div with "App-body" class', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(<RepoList />));
    });
  });
});
