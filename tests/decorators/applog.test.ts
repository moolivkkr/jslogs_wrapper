// tests/decorators/applog.test.ts

import { AppLog } from '../../src/decorators/applog';

describe('AppLog Decorator Tests', () => {
  // Mocked console.log for testing
  let mockConsoleLog: jest.SpyInstance;

  beforeEach(() => {
    mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    mockConsoleLog.mockRestore();
  });

  it('should log an app event with default values', () => {
    class TestClass {
      @AppLog()
      logMessage() {
        // Your logging logic here
      }
    }

    const instance = new TestClass();
    instance.logMessage();

    // Verify that console.log was called with default values
    expect(mockConsoleLog).toHaveBeenCalledWith(
      JSON.stringify({
        'timestamp': '',
        'observed.timestamp': '',
        'trace.id': '',
        'span.id': '',
        'trace.flags': '',
        'severity.text': '',
        'severity.number': 0,
        'body': '',
        'instrumentation.scope': '',
        // ... Add more fields as needed
      })
    );
  });

  it('should log an app event with custom values', () => {
    const timestamp = '2023-10-26T12:00:00.000Z';
    const observedTimestamp = '2023-10-26T12:01:00.000Z';
    const traceId = '1234567890abcdef';
    const spanId = 'abcdef1234567890';
    const traceFlags = '01';
    const severityText = 'INFO';
    const severityNumber = 2;
    const body = 'This is an app log message';
    const instrumentationScope = 'app-scope';

    class TestClass {
      @AppLog(
        timestamp,
        observedTimestamp,
        traceId,
        spanId,
        traceFlags,
        severityText,
        severityNumber,
        body,
        instrumentationScope
      )
      logMessage() {
        // Your logging logic here
      }
    }

    const instance = new TestClass();
    instance.logMessage();

    // Verify that console.log was called with the custom values
    expect(mockConsoleLog).toHaveBeenCalledWith(
      JSON.stringify({
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
      })
    );
  });

  it('should log an app event with some default and some custom values', () => {
    const timestamp = '2023-10-26T12:00:00.000Z';

    class TestClass {
      @AppLog(timestamp, '', '', 'abcdef1234567890', '', 'WARN', 1, 'Custom message')
      logMessage() {
        // Your logging logic here
      }
    }

    const instance = new TestClass();
    instance.logMessage();

    // Verify that console.log was called with a mix of default and custom values
    expect(mockConsoleLog).toHaveBeenCalledWith(
      JSON.stringify({
        'timestamp': timestamp,
        'observed.timestamp': '',
        'trace.id': '',
        'span.id': 'abcdef1234567890',
        'trace.flags': '',
        'severity.text': 'WARN',
        'severity.number': 1,
        'body': 'Custom message',
        'instrumentation.scope': '',
        // ... Add more fields as needed
      })
    );
  });
});
