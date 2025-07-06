// components/CurrencySelector.js
import { useState, useEffect } from 'react';

const currencyRates = {
  IDR: 1,
  USD: 0.000065,
  EUR: 0.000060,
  JPY: 0.0096
};

export default function CurrencySelector({ selectedCurrency, onChange }) {
  const [localCurrency, setLocalCurrency] = useState(selectedCurrency || 'IDR');

  useEffect(() => {
    onChange(localCurrency);
  }, [localCurrency]);

  return (
    <div className="text-sm text-gray-700">
      <label htmlFor="currency" className="mr-2 font-medium">
        Currency:
      </label>
      <select
        id="currency"
        value={localCurrency}
        onChange={(e) => setLocalCurrency(e.target.value)}
        className="px-2 py-1 border border-gray-300 rounded-md"
      >
        {Object.keys(currencyRates).map((code) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>
    </div>
  );
}

export function convertPrice(amountInIDR, targetCurrency) {
  const rate = currencyRates[targetCurrency] || 1;
  return amountInIDR * rate;
}

export function formatPrice(amount, currency) {
  const normalizedCurrency = currency === 'Rp' ? 'IDR' : currency;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: normalizedCurrency,
    maximumFractionDigits: 0
  });

  return formatter.format(amount);
}