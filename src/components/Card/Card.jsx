import React from 'react'

export default function Card() {
  return (
    <section className="bg-gray-2 pb-10 pt-20 lg:pb-20 lg:pt-[120px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 xl:w-1/3">
            <div
              className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3"
            >
              <Image
                src="../images/cards/card-01/image-01.jpg"
                alt="image"
                className="w-full"
                height={100} width={100}
              />
              <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] dark:text-white"
                  >
                    50+ Best creative website themes & templates
                  </a>
                </h3>
                <p
                  className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6"
                >
                  Lorem ipsum dolor sit amet pretium consectetur adipiscing
                  elit. Lorem consectetur adipiscing elit.
                </p>

                <a
                  href="javascript:void(0)"
                  className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 xl:w-1/3">
            <div
              className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3"
            >
              <Image
                src="../images/cards/card-01/image-02.jpg"
                alt="image"
                className="w-full"
                height={100} width={100}
              />
              <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] dark:text-white"
                  >
                    The ultimate UX and UI guide to card design
                  </a>
                </h3>
                <p className="mb-7 text-base leading-relaxed text-body-color">
                  Lorem ipsum dolor sit amet pretium consectetur adipiscing
                  elit. Lorem consectetur adipiscing elit.
                </p>

                <a
                  href="javascript:void(0)"
                  className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 xl:w-1/3">
            <div
              className="mb-10 overflow-hidden rounded-lg bg-white shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3"
            >
              <Image
                src="../images/cards/card-01/image-03.jpg"
                alt="image"
                className="w-full"
                height={100} width={100}
              />
              <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] dark:text-white"
                  >
                    Creative Card Component designs graphic elements
                  </a>
                </h3>
                <p className="mb-7 text-base leading-relaxed text-body-color">
                  Lorem ipsum dolor sit amet pretium consectetur adipiscing
                  elit. Lorem consectetur adipiscing elit.
                </p>

                <a
                  href="javascript:void(0)"
                  className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
