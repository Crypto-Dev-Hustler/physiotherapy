"use client"

export function Details() {
    return (
        <section id="details" className="flex flex-row items-center justify-center gap-16 py-10 bg-gray-900 text-white">
            <div className="text-center lg:mr-80 lg:text-4xl text-grey-900">
                3 yrs+
                <div className="lg:text-2xl font-bold">Experience</div>
            </div>
            <div className="text-center lg:text-4xl text-grey-900">
                50+
                <div className="lg:text-2xl font-bold">Therapies</div>
            </div>
            <div className="text-center lg:ml-80 lg:text-4xl text-grey-900">
                4000+
                <div className="lg:text-2xl font-bold">Satisfied Patients</div>
            </div>
        </section>
    )
}