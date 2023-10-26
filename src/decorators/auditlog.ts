// src/decorators/auditlog.ts

import { auditSemConv } from '../semconv/audit';

export function AuditLog(
  eventName: string,
  action: string,
  outcome: string,
  reason: string,
  details: string,
  durationMs: number = 0,
  userId: string = '',
  userName: string = '',
  userRoles: string[] = [],
  objectType: string = '',
  objectId: string = '',
  objectName: string = ''
) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      // Log audit event with additional context
      const logData = {
        'audit.event.name': eventName,
        'audit.event.action': action,
        'audit.event.outcome': outcome,
        'audit.event.reason': reason,
        'audit.event.details': details,
        'audit.event.duration.ms': durationMs,
        'audit.user.id': userId,
        'audit.user.name': userName,
        'audit.user.roles': userRoles,
        'audit.object.type': objectType,
        'audit.object.id': objectId,
        'audit.object.name': objectName,
        // ... Add more fields as needed
      };

      console.log(JSON.stringify(logData));

      // Call the original method
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}
