// "use client"

// import { MapPinned, Award, Badge, BookmarkCheck, Bolt } from "lucide-react"
// import Image from "next/image"

// export function ChildDetailSection() {
//     return (
//         <section id="childdetails" className="lg:h-screen flex w-screen">
//             <div className="lg:w-1/2 flex items-center pl-0 lg:pl-10">
//                 <div className="gap-4 flex flex-col justify-center lg:pl-10 lg:pr-10 pl-5 pr-5">
//                     <h2 className="text-4xl lg:text-4xl pt-10 lg:pt-0 font-bold mb-8 text-gray-900">Child Center</h2>
//                     <div className="flex">
//                         <Award className="text-blue-600"/>
//                         <span className="text-gray-900 pl-6">1500+ satisfied patients</span>
//                     </div>
//                     <div className="flex">
//                         <Badge className="text-blue-600"/>
//                         <span className="pl-6">3+ years of working experience</span>
//                     </div>
//                     <div className="flex">
//                         <BookmarkCheck className="text-blue-600"/>
//                         <span className="pl-6">40+ therapies and techniques</span>
//                     </div>
//                     <div className="flex">
//                         <Bolt className="text-blue-600"/>
//                         <span className="text-gray-900 pl-6">Monday to Saturday (9:00 am to 8:00 pm)</span>
//                     </div>
//                     <div className="flex">
//                         <MapPinned className="text-blue-600"/>
//                         <span className="text-gray-900 pl-6">1655p basement (Near by Doordarshan Appartment), Sector-45, Gurugram</span>
//                     </div>
//                     <button className="w-40 h-10 mb-10 lg:mb-0 rounded-lg text-white bg-blue-600 mt-2">
//                         Book Appointment
//                     </button>
//                 </div>
//             </div>
//             <div className="lg:w-1/2 w-0 h-0 lg:h-screen flex items-center invisible lg:visible">
//                             <div className="flex justify-center items-center h-full lg:h-1/2">
//                                 <Image src={"/d01.jpg"} alt="hi" width={"700"} height={10} className="rounded-lg w-full h-full object-cover" />
//                             </div>
//                         </div>
//         </section>
//     )
// }



"use client";

import { MapPinned, Award, Badge, BookmarkCheck, Bolt } from "lucide-react";
import Image from "next/image";

export function ChildDetailSection() {
  return (
    <section id="childdetails" className="lg:h-dvh flex w-screen">
      {/* Content Section */}
      <div className="lg:w-1/2 flex items-center pl-0 lg:pl-10">
        <div className="gap-4 flex flex-col justify-center lg:pl-10 lg:pr-10 pl-5 pr-5">
          <h2 className="text-4xl lg:text-4xl pt-10 lg:pt-0 font-bold mb-8 text-gray-900">
            Child Center
          </h2>

          <div className="flex">
            <Award className="text-blue-600" />
            <span className="text-gray-900 pl-6">1500+ satisfied patients</span>
          </div>

          <div className="flex">
            <Badge className="text-blue-600" />
            <span className="pl-6">3+ years of working experience</span>
          </div>

          <div className="flex">
            <BookmarkCheck className="text-blue-600" />
            <span className="pl-6">40+ therapies and techniques</span>
          </div>

          <div className="flex">
            <Bolt className="text-blue-600" />
            <span className="text-gray-900 pl-6">
              Monday to Saturday (9:00 am to 8:00 pm)
            </span>
          </div>

          <div className="flex">
            <MapPinned className="text-blue-600" />
            <span className="text-gray-900 pl-6">
              1655p basement (Near Doordarshan Apartment), Sector-45, Gurugram
            </span>
          </div>

          <button className="w-40 h-10 mb-10 lg:mb-0 rounded-lg text-white bg-blue-600 mt-2 hover:bg-blue-700 transition">
            Book Appointment
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 w-0 h-0 lg:h-dvh flex items-center invisible lg:visible">
        <div className="flex justify-center items-center h-full lg:h-1/2">
          <Image
            src="/d01.jpg"
            alt="Child Center"
            width={700}
            height={500}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
