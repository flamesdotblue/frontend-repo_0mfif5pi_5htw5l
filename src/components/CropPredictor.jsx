import { useState } from 'react'
import { Sprout, Upload } from 'lucide-react'

export default function CropPredictor() {
  const [form, setForm] = useState({
    n: '',
    p: '',
    k: '',
    ph: '',
    rainfall: '',
    temperature: '',
    humidity: '',
    soil: 'loam',
  })
  const [fileName, setFileName] = useState('')
  const [message, setMessage] = useState('')

  function onChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleFile(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setFileName(file.name)
    setMessage('Dataset uploaded. Model training happens on the server after you sign in.')
  }

  function onSubmit(e) {
    e.preventDefault()
    setMessage('Prediction will appear here after connecting to the backend.')
  }

  return (
    <section id="predict" className="py-12 sm:py-16 bg-gradient-to-b from-white to-green-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Sprout className="h-6 w-6 text-green-700" /> Crop predictor
          </h2>
          <p className="text-gray-600 mt-1">Enter field parameters or upload previous datasets to get recommendations.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <form onSubmit={onSubmit} className="lg:col-span-2 bg-white border rounded-xl p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="Nitrogen (N)" name="n" value={form.n} onChange={onChange} placeholder="e.g., 90" />
              <Input label="Phosphorus (P)" name="p" value={form.p} onChange={onChange} placeholder="e.g., 42" />
              <Input label="Potassium (K)" name="k" value={form.k} onChange={onChange} placeholder="e.g., 37" />
              <Input label="pH" name="ph" value={form.ph} onChange={onChange} placeholder="e.g., 6.5" />
              <Input label="Rainfall (mm)" name="rainfall" value={form.rainfall} onChange={onChange} placeholder="e.g., 220" />
              <Input label="Temperature (°C)" name="temperature" value={form.temperature} onChange={onChange} placeholder="e.g., 24" />
              <Input label="Humidity (%)" name="humidity" value={form.humidity} onChange={onChange} placeholder="e.g., 68" />
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">Soil type</label>
                <select
                  name="soil"
                  value={form.soil}
                  onChange={onChange}
                  className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="loam">Loam</option>
                  <option value="clay">Clay</option>
                  <option value="sandy">Sandy</option>
                  <option value="silty">Silty</option>
                  <option value="peaty">Peaty</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-green-600 text-white px-4 py-2 font-medium hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
              >
                Get Recommendation
              </button>
              <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-gray-700">
                <input type="file" accept=".csv" className="hidden" onChange={handleFile} />
                <span className="inline-flex items-center gap-2 rounded-md border px-3 py-2 hover:bg-gray-50">
                  <Upload className="h-4 w-4" /> Upload dataset (CSV)
                </span>
              </label>
            </div>

            {message && (
              <div className="mt-4 rounded-md bg-green-50 border border-green-200 p-3 text-sm text-green-800">
                {message}
              </div>
            )}
            {fileName && (
              <p className="mt-2 text-xs text-gray-500">Selected: {fileName}</p>
            )}
          </form>

          <aside className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">How it works</h3>
            <ol className="mt-3 space-y-3 text-sm text-gray-600 list-decimal list-inside">
              <li>Sign up and verify your email.</li>
              <li>Upload your previous yield or soil lab datasets (CSV).</li>
              <li>We train and evaluate a model tailored to your region.</li>
              <li>Get recommended crops along with confidence and tips.</li>
            </ol>
            <div className="mt-4 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 p-4">
              <p className="text-sm font-medium text-green-900">Coming next</p>
              <p className="text-xs text-green-800/80">Connect live weather and satellite data for even better predictions.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Input({ label, name, value, onChange, placeholder }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">{label}</label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="rounded-md border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
      />
    </div>
  )
}
