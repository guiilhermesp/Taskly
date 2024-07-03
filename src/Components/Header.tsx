const Header = () => {
  return (
    <header className="fixed top-0 w-screen border-b-2 border-gray-700 px-4 lg:px-6 py-2.5 flex items-center">
      <img src="../src/assets/logo.png" alt="Taskly logo" className="h-16 w-16 mr-4" />
      <h6 className="text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
        Taskly
      </h6>
    </header>
  );
};

export default Header;
