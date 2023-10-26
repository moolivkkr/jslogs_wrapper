// src/decorators/applog.ts

import { applogSemConv } from '../semconv/common';

export function AppLog(
  timestamp: string = '',
  observedTimestamp: string = '',
  traceId: string = '',
  spanId: string = '',
  traceFlags: string = '',
  severityText: string = '',
  severityNumber: number = 0,
  body: string = '',
  instrumentationScope: string = ''
) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      // Log app event with additional context
      const logData = {
        'timestamp': timestamp,
        'observed.timestamp': observedTimestamp,
        'trace.id': traceId,
        'span.id': spanId,
        'trace.flags': traceFlags,
        'severity.text': severityText,
        'severity.number': severityNumber,
        'body': body,
        'instrumentation.scope': instrumentationScope,
        // ... Add more fields as needed
      };

      console.log(JSON.stringify(logData));

      // Call the original method
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}
