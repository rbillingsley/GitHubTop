import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { describe, it } from 'mocha';
import App from '../src/app';
import RepoList from '../src/repoList';

require('dotenv').config();

chai.use(chaiEnzyme);

describe('Component: App', () => {
  describe('App-graph-query-button', () => {
    it('should render a query button', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('App-graph-query-button'));
    });

    it('should call makeRequest() when clicked', () => {
      sinon.spy(App.prototype, 'makeRequest');
      const wrapper = shallow(<App />);
      wrapper.find('App-graph-query-button').simulate('click');
      expect(App.prototype.makeRequest.calledOnce).to.equal(true);
      App.prototype.makeRequest.restore();
    });
  });

  describe('App-rest-query-button', () => {
    it('should render a query button', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('App-rest-query-button'));
    });

    it('should call makeRequest() when clicked', () => {
      sinon.spy(App.prototype, 'makeRequest');
      const wrapper = shallow(<App />);
      wrapper.find('App-rest-query-button').simulate('click');
      expect(App.prototype.makeRequest.calledOnce).to.equal(true);
      App.prototype.makeRequest.restore();
    });
  });

  describe('App-body', () => {
    it('should render a div with "App-body" class that contains a RepoList component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(<RepoList />));
    });
  });
});
