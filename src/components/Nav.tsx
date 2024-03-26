const Nav = () => {
  return (
    <nav className="w-full h-14 md:h-16 bg-indigo-500 shadow-xl dark:shadow-none shadow-indigo-200 flex justify-between items-center px-4">
      <h1 className="text-2xl font-bold text-white">Hello!</h1>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="bg-white px-4 py-1 text-black rounded shadow-md"
        >
          Cart
        </button>
        <button
          type="button"
          className="bg-white px-4 py-1 text-black rounded shadow-md"
        >
          User
        </button>
      </div>
    </nav>
  );
};

export default Nav;
