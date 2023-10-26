// src/semconv/common.ts

export const applogSemConv = {
    // Timestamps
    'timestamp': '',             // Timestamp in ISO 8601 format.
    'observed.timestamp': '',    // Observed timestamp in ISO 8601 format.
  
    // Trace Context
    'trace.id': '',              // The unique identifier for a trace.
    'span.id': '',               // The unique identifier for a span.
    'trace.flags': '',           // Flags indicating sampling decisions.
  
    // Severity
    'severity.text': '',         // Textual representation of severity (e.g., "INFO", "ERROR").
    'severity.number': 0,        // Numeric representation of severity.
  
    // Message Body
    'body': '',                  // Message body or content.
  
    // Instrumentation Scope
    'instrumentation.scope': '',  // The scope or context of instrumentation.
  };
  