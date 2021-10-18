import Search from "../Search/search";

function Button() {
  return (
    <div className="flex justify-between py-5">
      <div className="flex flex-col justify-start">
        <Search></Search>
      </div>
      <div className="flex justify-end">

      <div className="flex flex-col">
        <button className="w-40 h-12 mr-2 text-white bg-green-500 rounded-md">
          Add income
        </button>
      </div>
      <div className="flex flex-col">
        <button className="w-40 h-12 text-white bg-yellow-500 rounded-md">
          Issue Problem
        </button>
      </div>
      </div>
    </div>
  );
};

export default Button;
