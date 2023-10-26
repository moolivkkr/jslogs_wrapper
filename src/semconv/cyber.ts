// src/semconv/cyber.ts

export const cyberSemConv = {
    // Event
    'event.name': '',             // The name of the event (e.g., "UserLogin").
    'event.action': '',           // The action associated with the event (e.g., "CREATE", "DELETE").
    'event.outcome': '',          // The outcome of the event (e.g., "SUCCESS", "FAILURE").
    'event.reason': '',           // A descriptive reason for the outcome.
    'event.details': '',          // Additional details about the event, possibly JSON or a string.
  
    // Duration
    'event.duration.ms': 0,       // Duration of the event in milliseconds.
  
    // Overflow
    'event.overflow': false,      // Indicates if some logged data was truncated or overflowed.
    
    // Source
    'event.source.ip': '',        // The source IP address.
    'event.source.port': 0,       // The source port number.
    
    // Destination
    'event.destination.ip': '',   // The destination IP address.
    'event.destination.port': 0,  // The destination port number.
  };
  