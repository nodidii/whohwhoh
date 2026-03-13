export async function generateTransakSession() {
  const API_SECRET = 'HwCCdZ6lnWAFJ12L+chJLw==';
  const API_KEY = 'ea49a854-3821-4db4-984b-780109e4e19f';

  try {
    const tokenBody = {
      apiSecret: API_SECRET,
    };

    console.log('[TRANSAK] Requesting access token...');
    console.log('[TRANSAK] Token endpoint: https://api.transak.com/partners/api/v2/refresh-token');
    console.log('[TRANSAK] Token request body:', JSON.stringify(tokenBody, null, 2));

    const tokenResponse = await fetch(
      'https://api.transak.com/partners/api/v2/refresh-token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tokenBody),
      }
    );

    console.log('[TRANSAK] Token response status:', tokenResponse.status);

    let tokenData;
    try {
      tokenData = await tokenResponse.json();
      console.log('[TRANSAK] Token response body:', JSON.stringify(tokenData, null, 2));
    } catch (parseError) {
      const textBody = await tokenResponse.text();
      console.log('[TRANSAK] Token response (failed to parse JSON):', textBody);
      throw new Error(`Failed to parse token response: ${textBody}`);
    }

    if (!tokenResponse.ok) {
      const errorMsg = tokenData.error || tokenData.message || 'Unknown error';
      throw new Error(`Token request failed with status ${tokenResponse.status}: ${errorMsg}`);
    }

    const accessToken = tokenData.accessToken;
    if (!accessToken) {
      throw new Error('No accessToken in response');
    }

    console.log('[TRANSAK] Got access token, requesting widget session...');

    const sessionBody = {
      defaultCryptoCurrency: 'USDT',
      networks: 'polygon',
      walletAddress: '0x45361Bd89Edc1d7C69e2D13a1c314f92c71CF4CD',
      disableWalletAddressForm: true,
      fiatCurrency: 'EUR',
    };

    console.log('[TRANSAK] Session endpoint: https://api.transak.com/partners/api/v1/widget-session');
    console.log('[TRANSAK] Session request body:', JSON.stringify(sessionBody, null, 2));

    const sessionResponse = await fetch(
      'https://api.transak.com/partners/api/v1/widget-session',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(sessionBody),
      }
    );

    console.log('[TRANSAK] Session response status:', sessionResponse.status);

    let sessionData;
    try {
      sessionData = await sessionResponse.json();
      console.log('[TRANSAK] Session response body:', JSON.stringify(sessionData, null, 2));
    } catch (parseError) {
      const textBody = await sessionResponse.text();
      console.log('[TRANSAK] Session response (failed to parse JSON):', textBody);
      throw new Error(`Failed to parse session response: ${textBody}`);
    }

    if (!sessionResponse.ok) {
      const errorMsg = sessionData.error || sessionData.message || 'Unknown error';
      throw new Error(`Session request failed with status ${sessionResponse.status}: ${errorMsg}`);
    }

    const sessionId = sessionData.sessionId;
    if (!sessionId) {
      throw new Error('No sessionId in response');
    }

    console.log('[TRANSAK] Successfully got sessionId:', sessionId);
    return { sessionId };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('[TRANSAK] Error generating session:', errorMessage);
    throw new Error(errorMessage);
  }
}
