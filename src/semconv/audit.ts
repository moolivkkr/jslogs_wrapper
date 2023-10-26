// src/semconv/audit.ts

export const auditSemConv = {
    // Audit Event
    'audit.event.name': '',             // The name of the audit event (e.g., "UserLogin").
    'audit.event.action': '',           // The action associated with the audit event (e.g., "CREATE", "DELETE").
    'audit.event.outcome': '',          // The outcome of the audit event (e.g., "SUCCESS", "FAILURE").
    'audit.event.reason': '',           // A descriptive reason for the outcome.
    'audit.event.details': '',          // Additional details about the audit event, possibly JSON or a string.
  
    // Duration
    'audit.event.duration.ms': 0,       // Duration of the audit event in milliseconds.
  
    // User
    'audit.user.id': '',                // The unique identifier of the user.
    'audit.user.name': '',              // The name or username of the user.
    'audit.user.roles': [],             // An array of roles associated with the user.
  
    // Object
    'audit.object.type': '',            // The type of the object being audited.
    'audit.object.id': '',              // The unique identifier of the object.
    'audit.object.name': '',            // The name or title of the object.
  };
  