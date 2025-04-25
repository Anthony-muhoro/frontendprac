import React from 'react';

const App = () => {
  return (
    <main className="bg-amber-50 min-h-screen p-6">
      <section className="flex flex-col lg:flex-row justify-between items-center gap-8">
        
        {/* Left Text Content */}
        <div className="max-w-xl space-y-6">
          <div className="space-y-3">
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-gray-900">
              Get paid early
            </h1>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-gray-900">
              Save automatically
            </h1>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-gray-900">
              All you pay
            </h1>
          </div>

          <div className="text-lg text-gray-700 font-medium space-y-1 pt-4">
            <p>Supports small businesses with simple invoicing,</p>
            <p>integrations, and cash flow management tools.</p>
          </div>

          {/* Email Input */}
          <div className="flex mt-6">
            <input
              type="email"
              placeholder="Your Business Email"
              className="h-12 w-[280px] px-4 rounded-l-full shadow-md outline-none border border-gray-300"
            />
            <button
              type="submit"
              className="h-12 px-6 bg-green-800 text-white cursor-pointer font-semibold rounded-r-full hover:bg-green-900 transition"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Invoice Card Preview */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-5">
          <div className="flex items-center gap-4">
            <img src="/logo.svg" alt="logo" className="w-12 h-12" />
            <div>
              <h3 className="text-lg font-semibold">Dipainhouse</h3>
              <p className="text-sm text-gray-500">muhoro@gmail.com</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <p className="text-gray-600 text-sm">Invoice</p>
            <h2 className="text-3xl font-bold text-gray-800">KSH 9,044,678</h2>
            <p className="text-sm text-gray-500">April 21, 2025</p>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Payment Method</p>
              <p className="font-medium">Credit Card</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Bank Account</p>
              <p className="font-medium">Equity Bank - 123456789</p>
            </div>
          </div>

          <button
            type="button"
            className="w-full mt-4 bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-800 transition"
          >
            Pay Now
          </button>
        </div>
      </section>
    </main>
  );
};

export default App;
