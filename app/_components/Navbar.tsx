import Image from "next/image";

export function Navbar() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">Fancy Asteroids</h1>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 text-white bg-transparent border border-white rounded hover:bg-white hover:text-gray-800 transition-colors duration-300">
          Favoritos
        </button>
        <Image
          src="https://api.dicebear.com/6.x/pixel-art/svg"
          alt="Avatar"
          className="w-10 h-10 rounded-full"
          width={24}
          height={24}
        />
      </div>
    </header>
  );
}
