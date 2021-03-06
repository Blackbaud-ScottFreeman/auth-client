import { BBCsrfXhr } from '../shared/csrf-xhr';
import { BBAuthTokenIntegration } from './auth-token-integration';

import 'jasmine-ajax';

describe('Auth token integration', () => {
  let requestSpy: jasmine.Spy;

  beforeEach(() => {
    requestSpy = spyOn(BBCsrfXhr, 'request');
  });

  it('should request a token without params', () => {

    BBAuthTokenIntegration.getToken();

    expect(requestSpy).toHaveBeenCalledWith(
      'https://s21aidntoken00blkbapp01.nxt.blackbaud.com/oauth2/token',
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      true
    );
  });

  it('should request a token with envId and permissionScope', () => {

    BBAuthTokenIntegration.getToken(true, 'abc', '123');

    expect(requestSpy).toHaveBeenCalledWith(
      'https://s21aidntoken00blkbapp01.nxt.blackbaud.com/oauth2/token',
      undefined,
      true,
      'abc',
      '123',
      undefined,
      true
    );

  });

  it('should request a token with envId, permissionScope, and leId', () => {

    BBAuthTokenIntegration.getToken(true, 'abc', '123', 'xyz');

    expect(requestSpy).toHaveBeenCalledWith(
      'https://s21aidntoken00blkbapp01.nxt.blackbaud.com/oauth2/token',
      undefined,
      true,
      'abc',
      '123',
      'xyz',
      true
    );
  });

});
