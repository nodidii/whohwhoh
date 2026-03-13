import { useState, useEffect } from 'react';
import { Loader as Loader2 } from 'lucide-react';
import { generateTransakSession } from '../api/transak-session';

export default function Pay() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSession() {
      try {
        setLoading(true);
        setError(null);
        const result = await generateTransakSession();
        setSessionId(result.sessionId);
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        console.error('Failed to fetch Transak session:', errorMsg);
        setError(errorMsg);
      } finally {
        setLoading(false);
      }
    }

    fetchSession();
  }, []);

  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-100 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              Pay Securely
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Pay with your card in EUR — instant and simple.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 shadow-xl shadow-cyan-500/10">
              {loading && (
                <div className="flex flex-col items-center justify-center" style={{ width: '450px', height: '650px' }}>
                  <Loader2 className="w-12 h-12 text-cyan-400 animate-spin mb-4" />
                  <p className="text-slate-300">Loading secure payment widget...</p>
                </div>
              )}

              {error && (
                <div className="flex flex-col items-center justify-center p-6" style={{ width: '450px', minHeight: '650px' }}>
                  <div className="text-center w-full">
                    <div className="w-16 h-16 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center mx-auto mb-4">
                      <div className="w-8 h-8 rounded-full bg-red-500" />
                    </div>
                    <p className="text-red-400 mb-6 text-sm font-medium">Failed to load payment widget</p>
                    <div className="bg-slate-950/50 border border-red-500/30 rounded-lg p-4 mb-6 text-left max-h-64 overflow-y-auto">
                      <p className="text-red-300 text-xs font-mono break-words whitespace-pre-wrap">{error}</p>
                    </div>
                    <button
                      onClick={() => window.location.reload()}
                      className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              )}

              {!loading && !error && sessionId && (
                <iframe
                  src={`https://global.transak.com/?apiKey=ea49a854-3821-4db4-984b-780109e4e19f&sessionId=${sessionId}`}
                  width="450"
                  height="650"
                  title="Transak Payment"
                  className="rounded-lg"
                  allow="camera;microphone;payment"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
