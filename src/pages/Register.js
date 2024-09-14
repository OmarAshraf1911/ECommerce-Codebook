import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import Logo from "../assets/logo.svg";
import { register } from "../services";

export const Register = () => {
  useTitle("Register");
  const navigate = useNavigate();

  async function handleRegister(event) {
    event.preventDefault();
    try {
      const authDetail = {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      };
      const data = await register(authDetail);
      data.accessToken ? navigate("/products") : toast.error(data);
    } catch (error) {
      toast.error(error.message, {
        closeButton: true,
        position: "bottom-center",
      });
    }
  }

  return (
    <main>
      <div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] dark:bg-gray-800 rounded-2xl shadow-xl">
        <div className="flex flex-row gap-3 pb-4">
          <div>
            <img src={Logo} width="50" alt="Logo" />
          </div>
          <h1 className="text-3xl font-bold text-[#4B5563] dark:text-white my-auto">
            CodeBook
          </h1>
        </div>
        <div className="text-sm font-light text-[#6B7280] dark:text-gray-400 pb-8">
          Sign up for an account on CodeBook.
        </div>
        <form onSubmit={handleRegister} className="flex flex-col">
          <div className="pb-2">
            <label
              htmlFor="name"
              className="block mb-2 text-base font-medium text-[#111827] dark:text-gray-200"
            >
              Name
            </label>
            <div className="relative text-gray-400 dark:text-gray-500">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </span>
              <input
                type="text"
                name="name"
                id="name"
                className="pl-12 mb-2 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border focus:border-transparent border-gray-300 dark:border-gray-600 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 dark:focus:ring-gray-500 block w-full p-2.5 py-3 px-4"
                placeholder="Your Name"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="pb-2">
            <label
              htmlFor="email"
              className="block mb-2 text-base font-medium text-[#111827] dark:text-gray-200"
            >
              Email
            </label>
            <div className="relative text-gray-400 dark:text-gray-500">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </span>
              <input
                type="email"
                name="email"
                id="email"
                className="pl-12 mb-2 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border focus:border-transparent border-gray-300 dark:border-gray-600 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 dark:focus:ring-gray-500 block w-full p-2.5 py-3 px-4"
                placeholder="name@company.com"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="pb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-base font-medium text-[#111827] dark:text-gray-200"
            >
              Password
            </label>
            <div className="relative text-gray-400 dark:text-gray-500">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-square-asterisk"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M12 8v8"></path>
                  <path d="m8.5 14 7-4"></path>
                  <path d="m8.5 10 7 4"></path>
                </svg>
              </span>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••••"
                className="pl-12 mb-2 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border focus:border-transparent border-gray-300 dark:border-gray-600 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 dark:focus:ring-gray-500 block w-full p-2.5 py-3 px-4"
                autoComplete="new-password"
                aria-autocomplete="list"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-[#FFFFFF] bg-[#1d4ed8] hover:bg-blue-800 dark:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6 dark:hover:bg-blue-800 focus:outline-none "
          >
            Sign Up
          </button>
          <div className="text-sm font-light text-[#6B7280] dark:text-gray-400 text-center">
            Already have an account?{" "}
            <Link
              to="/Login"
              className="font-medium text-[#1d4ed8] dark:text-blue-500 hover:underline"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};
