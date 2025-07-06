import { useEffect, useState } from 'react';

const AuthModal = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState('login'); // 'login' or 'register'

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const toggleMode = () => {
    setMode((prev) => (prev === 'login' ? 'register' : 'login'));
  };

  const isLogin = mode === 'login';

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg relative p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
          {isLogin ? 'Sign In to LocalTrip.me' : 'Create an account'}
        </h2>

        <form className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md"
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 mb-2">or continue with</p>
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="h-5 w-5"
            />
            <span className="text-sm font-medium text-gray-700">
              Continue with Google
            </span>
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {isLogin ? (
              <>
                Don’t have an account?{' '}
                <button onClick={toggleMode} className="text-blue-600 hover:underline">
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button onClick={toggleMode} className="text-blue-600 hover:underline">
                  Sign In
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;