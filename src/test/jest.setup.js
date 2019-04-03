// global.fetch = require('jest-fetch-mock')
import 'whatwg-fetch';
// import {Response, Request, Headers, fetch} from 'whatwg-fetch';
// global.Response = Response;
// global.Request = Request;
// global.Headers = Headers;
// global.fetch = fetch;

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
