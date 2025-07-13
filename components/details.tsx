"use client";

export function Details() {
  return (
    <section
      id="details"
      className="flex flex-row items-center justify-around py-8 bg-gray-900 text-white px-2 sm:px-4 lg:px-6 gap-2 sm:gap-4 md:gap-6 lg:gap-8"
    >
      <div className="text-center">
        <div className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          5 yrs+
        </div>
        <div className="text-base sm:text-lg lg:text-xl font-bold">
          Experience
        </div>
      </div>
      <div className="text-center">
        <div className="text-xl sm:text-2xl lg:text-3xl font-semibold">50+</div>
        <div className="text-base sm:text-lg lg:text-xl font-bold">
          Therapies
        </div>
      </div>
      <div className="text-center">
        <div className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          4000+
        </div>
        <div className="text-base sm:text-lg lg:text-xl font-bold">
          Satisfied Patients
        </div>
      </div>
    </section>
  );
}
