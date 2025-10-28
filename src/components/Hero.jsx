import { Sprout, BarChart3, Shield, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-white" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-4">
              <Sprout className="h-3.5 w-3.5" /> Smart Agriculture
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Predict the best crop for your field
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Turn soil and climate data into harvest-ready decisions. Upload past records or enter field parameters to get instant crop recommendations.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Feature icon={<BarChart3 className='h-5 w-5' />} title="Data-driven" subtitle="Learns from historical datasets" />
              <Feature icon={<Shield className='h-5 w-5' />} title="Secure" subtitle="Private by default" />
              <Feature icon={<Mail className='h-5 w-5' />} title="Verified" subtitle="Email confirmation for accounts" />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white/70 backdrop-blur border border-green-100 shadow-xl p-6">
              <div className="h-full w-full rounded-xl bg-gradient-to-br from-emerald-200/60 to-green-100/60 grid place-items-center text-center">
                <Sprout className="h-16 w-16 text-green-700" />
                <p className="mt-3 font-medium text-green-900">Built for agronomists and growers</p>
                <p className="text-sm text-green-800/80">Seamless workflow, beautiful insights</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border p-4 w-48">
              <p className="text-xs text-gray-500">Soil readiness</p>
              <p className="text-green-700 font-semibold">Optimal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-3 bg-white rounded-lg border p-3">
      <div className="p-2 rounded-md bg-green-50 text-green-700">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-800">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
  )
}
