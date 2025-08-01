// "use client"

// import Image from "next/image"

// export function ChildHero() {
//     return (
//         <section id="childhome">
//             <div>
//                 <div className="relative h-48 lg:h-screen w-screen">
//                     <div className="absolute z-0 bg-gray-900 ">
//                         <Image src={"/d11.jpg"} alt="center" width={"12000"} height={10} className="w-full h-full object-cover"/>
//                     </div>
//                     <div className="absolute z-10 flex flex-col mt-16 lg:mt-40 items-center w-full text-white">
//                         <h1 className="text-2xl lg:text-7xl font-bold">God Gift Child Development Center</h1>
//                         <p className="text-md lg:text-2xl text-blue-600 mt-2 text-center">
//                             Your partner in rehabilitation and wellness
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }


"use client";

import Image from "next/image";

export function ChildHero() {
  return (
    <section id="childhome">
      <div>
        <div className="relative h-48 lg:h-dvh w-screen">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 bg-gray-900">
            <Image
              src="/d11.jpg"
              alt="Child Center"
              width={12000}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="absolute inset-0 z-10 flex flex-col justify-center mt-16 lg:mt-40 items-center w-full text-white px-4">
            <h1 className="text-2xl lg:text-7xl font-bold text-center">
              God Gift Child Development Center
            </h1>
            <p className="text-md lg:text-2xl text-blue-600 mt-2 text-center max-w-2xl">
              Your partner in rehabilitation and wellness
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
