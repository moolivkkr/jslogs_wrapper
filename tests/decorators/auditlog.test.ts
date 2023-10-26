// tests/decorators/auditlog.test.ts

import { AuditLog } from '../../src/decorators/auditlog';

describe('AuditLog Decorator Tests', () => {
  // Mocked console.log for testing
  let mockConsoleLog: jest.SpyInstance;

  beforeEach(() => {
    mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    mockConsoleLog.mockRestore();
  });

  it('should log an audit event', () => {
    const eventName = 'UserLogin';
    const action = 'LOGIN';
    const outcome = 'SUCCESS';
    const reason = 'User logged in successfully';
    const details = 'User ID: 123456';
    const durationMs = 100;
    const userId = '123456';
    const userName = 'john_doe';
    const userRoles = ['user'];
    const objectType = 'User';
    const objectId = '123456';
    const objectName = 'John Doe';

    class TestClass {
      @AuditLog(eventName, action, outcome, reason, details, durationMs, userId, userName, userRoles, objectType, objectId, objectName)
      performAction() {
        // Your action logic here
      }
    }

    const instance = new TestClass();
    instance.performAction();

    // Verify that console.log was called with the correct data
    expect(mockConsoleLog).toHaveBeenCalledWith(
      JSON.stringify({
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
      })
    );
  });
});
