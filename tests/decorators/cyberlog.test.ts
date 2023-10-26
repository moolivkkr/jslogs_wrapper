// tests/decorators/cyberlog.test.ts

import { CyberLog } from '../../src/decorators/cyberlog';
import { HttpContext } from '../../src/semconv/cyber';
import { getHttpContext } from '../../src/utils/httpContextUtil';

describe('CyberLog Decorator Tests', () => {
  // Mocked HTTP context data for testing
  const mockedHttpContext: HttpContext = {
    'protocol.url': 'https://example.com',
    'protocol.type': 'HTTP',
    'protocol.version': '1.1',
    'protocol.headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer token',
    },
    'protocol.transport': 'HTTPS',
    'geolocation': 'New York, USA',
    'client_ip': '127.0.0.1',
    'request': 'Sample request data',
    'response': 'Sample response data',
  };

  // Mocked request, response, or context objects for different frameworks
  const expressReq = {
    url: 'https://example.com',
    httpVersion: '1.1',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer token',
    },
    connection: { encrypted: true },
    ip: '127.0.0.1',
  };

  const fastifyRequest = {
    url: 'https://example.com',
    raw: {
      httpVersion: '1.1',
      encrypted: true,
    },
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer token',
    },
    ip: '127.0.0.1',
  };

  const koaContext = {
    request: {
      url: 'https://example.com',
      httpVersion: '1.1',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token',
      },
    },
    secure: true,
    ip: '127.0.0.1',
  };

  it('should log a cyber event with enriched HTTP context for Express.js', () => {
    const enrichHttpContext = true;
    const cyberlogDecorator = CyberLog(
      'UserLogin',
      'LOGIN',
      'SUCCESS',
      'LOW',
      'Login successful',
      'Additional details',
      1000,
      false,
      enrichHttpContext,
      expressReq, // Provide the request object for Express.js
      undefined,
      undefined
    );

    const logFunction = jest.fn();
    const originalMethod = () => {};

    const decoratedMethod = cyberlogDecorator({}, 'methodName', {
      value: originalMethod,
    });
    decoratedMethod();

    expect(logFunction).toHaveBeenCalled();
    // Additional assertions for the expected log output
  });

  it('should log a cyber event with enriched HTTP context for Fastify', () => {
    const enrichHttpContext = true;
    const cyberlogDecorator = CyberLog(
      'UserLogin',
      'LOGIN',
      'SUCCESS',
      'LOW',
      'Login successful',
      'Additional details',
      1000,
      false,
      enrichHttpContext,
      undefined,
      undefined,
      fastifyRequest // Provide the request object for Fastify
    );

    const logFunction = jest.fn();
    const originalMethod = () => {};

    const decoratedMethod = cyberlogDecorator({}, 'methodName', {
      value: originalMethod,
    });
    decoratedMethod();

    expect(logFunction).toHaveBeenCalled();
    // Additional assertions for the expected log output
  });

  it('should log a cyber event with enriched HTTP context for Koa.js', async () => {
    const enrichHttpContext = true;
    const cyberlogDecorator = CyberLog(
      'UserLogin',
      'LOGIN',
      'SUCCESS',
      'LOW',
      'Login successful',
      'Additional details',
      1000,
      false,
      enrichHttpContext,
      undefined,
      undefined,
      koaContext // Provide the context object for Koa.js
    );

    const logFunction = jest.fn();
    const originalMethod = () => {};

    const decoratedMethod = cyberlogDecorator({}, 'methodName', {
      value: originalMethod,
    });
    decoratedMethod();

    expect(logFunction).toHaveBeenCalled();
    // Additional assertions for the expected log output
  });

  it('should log a cyber event without enriched HTTP context when enrichHttpContext is false', () => {
    const enrichHttpContext = false;
    const cyberlogDecorator = CyberLog(
      'UserLogin',
      'LOGIN',
      'SUCCESS',
      'LOW',
      'Login successful',
      'Additional details',
      1000,
      false,
      enrichHttpContext,
      undefined,
      undefined,
      undefined
    );

    const logFunction = jest.fn();
    const originalMethod = () => {};

    const decoratedMethod = cyberlogDecorator({}, 'methodName', {
      value: originalMethod,
    });
    decoratedMethod();

    expect(logFunction).toHaveBeenCalled();
    // Additional assertions for the expected log output without HTTP context
  });
});
