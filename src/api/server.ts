import { generateTransakSession } from './transak-session';

export async function handleApiRequest(path: string): Promise<Response> {
  if (path === '/api/transak-session') {
    try {
      const result = await generateTransakSession();
      return new Response(JSON.stringify(result), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ error: 'Failed to generate session' }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }
  }

  return new Response('Not Found', { status: 404 });
}
