import Image from "next/image";
import React from "react";

export function ErrorScreen() {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-[50vh] text-center">
      <Image src={"/pokeball.png"} alt="Error Logo" width={100} height={100} />
      <div className="text-2xl">
        Something went wrong. Please go to Home Page.
      </div>
    </div>
  );
}

export default ErrorScreen;
