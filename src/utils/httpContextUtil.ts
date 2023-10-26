// httpContextUtil.ts

import { HttpContext } from '../decorators/cyberlog'; // Adjust the import path as needed

export function getHttpContext(req: any | undefined, res: any | undefined, ctx: any | undefined): HttpContext | {} {
  if (req && res) {
    // Express.js or Fastify
    return {
      'protocol.url': req.url,
      'protocol.type': 'HTTP',
      'protocol.version': req.httpVersion || req.raw.httpVersion,
      'protocol.headers': req.headers,
      'protocol.transport': req.connection.encrypted || req.raw.encrypted ? 'HTTPS' : 'HTTP',
      'geolocation': '', // Add geolocation if available
      'client_ip': req.ip || req.connection.remoteAddress,
      'request': '', // Placeholder for request data (e.g., first 2k characters)
      'response': '', // Placeholder for response data (e.g., first 2k characters)
    };
  } else if (ctx) {
    // Koa.js
    return {
      'protocol.url': ctx.request.url,
      'protocol.type': 'HTTP',
      'protocol.version': ctx.req.httpVersion,
      'protocol.headers': ctx.headers,
      'protocol.transport': ctx.secure ? 'HTTPS' : 'HTTP',
      'geolocation': '', // Add geolocation if available
      'client_ip': ctx.ip,
      'request': '', // Placeholder for request data (e.g., first 2k characters)
      'response': '', // Placeholder for response data (e.g., first 2k characters)
    };
  } else {
    return {}; // Default case if no recognized framework or no enrichment needed
  }
}
