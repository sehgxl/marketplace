function App() {
  return (
    <div class="min-h-screen grid grid-cols-[0.20fr_0.80fr] bg-gray-100">
      <div className="bg-white p-5 flex flex-col gap-10">
        <div className=" text-3xl">PNFT MarketPlace</div>
        <div className="flex flex-col gap-4">
          <div className="text-lg hover:font-semibold hover:text-violet-800">
            Dashboard
          </div>
          <div className="text-lg hover:font-semibold hover:text-violet-800">
            Wallpapers
          </div>
          <div className="text-lg hover:font-semibold hover:text-violet-800">
            Component Themes
          </div>

          <div className="font-bold">Profile</div>
          <div className="text-lg hover:font-semibold hover:text-violet-800">
            My portfolio
          </div>
          <div className="text-lg hover:font-semibold hover:text-violet-800">
            Favourites
          </div>
          <div className="text-lg hover:font-semibold hover:text-violet-800">
            History
          </div>
          <div className="text-lg hover:font-semibold hover:text-violet-800">
            Settings
          </div>
        </div>
      </div>
      <div className="p-5 ">
        <nav className="flex flex-row gap-5 mb-10">
          <input
            type="text"
            className=" w-full text-lg p-2 rounded-lg"
            placeholder="Search Here"
          />
          <div className="text-lg font-semibold text-violet-800 bg-gray-300 p-2 rounded-lg">
            User
          </div>
          <div className="text-lg font-semibold text-violet-800 bg-gray-300 p-2 rounded-lg">
            Creator
          </div>
          <div className=" rounded-full w-12 h-12 bg-gray-300"></div>
        </nav>
        <div className="flex flex-row gap-5 justify-center">
          <div className="w-[20rem] h-[20rem] bg-white flex flex-col justify-start text-center rounded-lg">
            <h1 className="text-[10rem] text-violet-800">+</h1>
            <h2 className="text-xl font-bold text-violet-800">Add your rice</h2>
          </div>
          <div className="w-[20rem] h-[20rem] bg-white flex flex-col justify-start text-center rounded-lg">
            <h1 className="text-[10rem] text-violet-800">+</h1>
            <h2 className="text-xl font-bold text-violet-800">
              Add your Wallpapers
            </h2>
          </div>
          <div className="w-[20rem] h-[20rem] bg-white flex flex-col justify-start text-center rounded-lg">
            <h1 className="text-[10rem] text-violet-800">+</h1>
            <h2 className="text-xl font-bold text-violet-800">
              Add your Components
            </h2>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
