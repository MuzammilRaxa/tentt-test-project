import { useState } from "react";
import head1 from "../assets/images/head1.jpg";
import head2 from "../assets/images/head2.jpg";
import head3 from "../assets/images/head3.jpg";
import head4 from "../assets/images/head4.jpg";

const IMAGE_URLS = [head1, head2, head3, head4];

function Header() {
  const [imageIndex, setImageIndex] = useState(0);

  function handleButtonClick() {
    const nextIndex = (imageIndex + 1) % IMAGE_URLS.length;
    setImageIndex(nextIndex);
  }

  return (
    <section className="mx-auto relative h-screen">
      <div
        className="bg-gray-900 bg-cover bg-center w-full h-full absolute inset-0 transition-transform ease-in-out"
        style={{ backgroundImage: `url(${IMAGE_URLS[imageIndex]})` }}
      />
      <div
        className="border border-white absolute bottom-20 left-24  cursor-pointer flex justify-center items-center"
        style={{ width: "9rem", height: "9rem" }}
        onClick={handleButtonClick}
      >
        <div className="relative w-28 h-28 mx-auto my-auto">
          <div
            className="progress-bar absolute top-0 left-0 w-full h-full rounded-md"
            style={{
              backgroundImage: `linear-gradient(to right, #1a202c, transparent)`,
            }}
          />
          <div
            className="bg-gray-900 bg-cover bg-center w-full h-full absolute inset-0"
            style={{
              backgroundImage: `url(${
                IMAGE_URLS[(imageIndex + 1) % IMAGE_URLS.length]
              })`,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            Next
          </div>
        </div>
        <div className="absolute text-white flex w-[174px] justify-between items-center left-48">
          <p>0{imageIndex + 1}</p>
          <div className="w-[103px] border-t border-white"></div>
          <p>0{IMAGE_URLS.length}</p>
        </div>
      </div>
    </section>
  );
}

export default Header;
