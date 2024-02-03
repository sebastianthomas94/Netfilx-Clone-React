function NavBar(){
    return (
      <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
        <h1 className="text-red-600 text-5xl font-bold  ml-2">NETFLIX</h1>
        <div className="my-2">
          <button className="text-white bg-red-600 px-6 py-2">English</button>
          <button className="text-white bg-red-600 px-6 py-2 mx-2 ">Sign In</button>
        </div>
      </div>
    );
}

export default NavBar;