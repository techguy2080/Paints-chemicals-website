"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!Cookies.get("cookie_consent")) setVisible(true);
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookie_consent", "true", { expires: 365, sameSite: "lax" });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex flex-col md:flex-row justify-between items-center z-50">
      <span>
        We use cookies to improve your experience. By using our site, you agree to our cookie policy.
      </span>
      <button
        onClick={acceptCookies}
        className="mt-3 md:mt-0 ml-0 md:ml-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition"
      >
        Accept
      </button>
    </div>
  );
}