import { useEffect, useState } from 'react';

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setVisible(true);
  }, []);

  const savePreferences = () => {
    const preferences = {
      essential: true,
      analytics,
      marketing,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setVisible(false);
    setShowModal(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Banner */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 shadow-xl rounded-lg p-5 z-50 w-[90%] max-w-xl text-sm md:text-base">
        <p className="text-gray-800 mb-4 text-center">
          We use cookies to improve your experience. Manage your preferences or accept all.
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100 transition"
          >
            Customize
          </button>
          <button
            onClick={savePreferences}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Accept All
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <h3 className="text-lg font-bold mb-4">Cookie Preferences</h3>

            <div className="mb-4">
              <label className="flex justify-between items-center">
                <span className="text-gray-700">Essential Cookies</span>
                <span className="text-sm text-gray-500">Always Enabled</span>
              </label>
            </div>

            <div className="mb-4">
              <label className="flex justify-between items-center">
                <span className="text-gray-700">Analytics Cookies</span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={() => setAnalytics(!analytics)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
              </label>
            </div>

            <div className="mb-6">
              <label className="flex justify-between items-center">
                <span className="text-gray-700">Marketing Cookies</span>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={() => setMarketing(!marketing)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
              </label>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-black"
              >
                Cancel
              </button>
              <button
                onClick={savePreferences}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save Preferences
              </button>
            </div>

            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
