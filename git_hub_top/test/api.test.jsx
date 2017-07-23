import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import { describe, it } from 'mocha';
import Api from '../src/api';

require('dotenv').config();

chai.use(chaiEnzyme);