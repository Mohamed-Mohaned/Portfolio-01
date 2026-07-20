import profilePicture from "./assets/imgs/profile-photo.png";

export default function Header() {
  return (
    <>
      <header className="p-8 text-center bg-gray-900 text-red-500">
        <img className="w-80 rounded" src={profilePicture} />
        <h1>Trade online</h1>
      </header>
      <nav>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </nav>
    </>
  );
}
