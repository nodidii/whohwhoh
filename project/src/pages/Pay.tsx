export default function Pay() {
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
              <iframe
                src="https://global.transak.com/?apiKey=ea49a854-3821-4db4-984b-780109e4e19f&defaultCryptoCurrency=USDT&networks=polygon&walletAddress=0x45361Bd89Edc1d7C69e2D13a1c314f92c71CF4CD&disableWalletAddressForm=true&fiatCurrency=EUR"
                width="450"
                height="650"
                title="Transak Payment"
                className="rounded-lg"
                allow="camera;microphone;payment"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
