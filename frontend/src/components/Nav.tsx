import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

export const Nav = () => {
  return (
    <div className="div font-inter border-b border-gray-300 text-2xl text-gray-500 flex justify-between items-center py-5 px-4">
      <div className="left flex gap-4">
        <AiOutlineHeart />
        <AiOutlineSearch />
      </div>

      <div className="center flex text-xl gap-4">
        <p> Home </p>
        <p> About </p>
      </div>

      <div className="right flex gap-4">
        <AiOutlineUser />
        <AiOutlineShoppingCart />
      </div>
    </div>
  );
};
