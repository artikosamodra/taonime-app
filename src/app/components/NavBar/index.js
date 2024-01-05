const Navbar = () => {
  return (
    <nav class="bg-blue-500 p-4 fixed top-0 w-full z-10">
      <div class="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div class="text-white text-lg font-bold">Logo</div>

        {/* Menu Navigasi */}
        <ul class="flex space-x-4">
          <li>
            <a href="#" class="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="text-white">
              About
            </a>
          </li>
          <li>
            <a href="#" class="text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#" class="text-white">
              Contact
            </a>
          </li>
        </ul>

        {/* Tombol untuk Layar Kecil (Mobile) */}
        <div class="lg:hidden">
          <button class="text-white">
            <svg
              xmlns=""
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
