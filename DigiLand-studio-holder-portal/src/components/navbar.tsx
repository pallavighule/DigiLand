import { useEffect, useState } from "react";

const Navbar = () => {
  const [hederaAccountId, setHederaAccountId] = useState<string | null>("");
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loggedInHederaAccountId = localStorage.getItem('accountId');
      setHederaAccountId(loggedInHederaAccountId);
    }
  }, []);
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold text-blue-600"></h1>
      <div className="flex items-center space-x-10">
        {hederaAccountId && (
          <div className="w-48 h-10 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-blue-600 border border-blue-300 rounded-lg flex items-center justify-center">
            <svg
              className="h-6 w-6 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />{" "}
              <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
            </svg>
            <p className="text-sm font-semibold text-white ml-2">
              {hederaAccountId}
            </p>
          </div>
        )}
        <div className="flex items-center space-x-2">
          <img
            src="/avatar-profile.png"
            alt="Profile"
            className="w-10 h-10 rounded-full border border-blue-300"
          />
          <div>
            <p className="text-sm font-semibold text-blue-600">Holder Portal</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
