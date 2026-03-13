export async function generateTransakSession() {
  const API_SECRET = 'HwCCdZ6lnWAFJ12L+chJLw==';
  const API_KEY = 'ea49a854-3821-4db4-984b-780109e4e19f';

  try {
    const tokenResponse = await fetch(
      'https://api.transak.com/partners/api/v2/refresh-token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiSecret: API_SECRET,
        }),
      }
    );

    if (!tokenResponse.ok) {
      throw new Error('Failed to get access token');
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.accessToken;

    const sessionResponse = await fetch(
      'https://api.transak.com/partners/api/v1/widget-session',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          defaultCryptoCurrency: 'USDT',
          networks: 'polygon',
          walletAddress: '0x45361Bd89Edc1d7C69e2D13a1c314f92c71CF4CD',
          disableWalletAddressForm: true,
          fiatCurrency: 'EUR',
        }),
      }
    );

    if (!sessionResponse.ok) {
      throw new Error('Failed to create widget session');
    }

    const sessionData = await sessionResponse.json();
    return { sessionId: sessionData.sessionId };
  } catch (error) {
    console.error('Error generating Transak session:', error);
    throw error;
  }
}
