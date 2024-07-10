import { motion } from "framer-motion";

export const Features1 = () => {
  return (
    <div className="">
      <section
        className="w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0"
        id="features"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
                <span className="custom-block-subtitle">Embrace Innovation</span>
                <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                Connect with Top Advocates
                </h2>
                <p className="mb-10 text-customGrayText leading-loose">
                Are you facing legal challenges and in search of trusted legal advice and representation? OwnAdvo offers a convenient way to connect with the best legal minds in the industry.

                </p>
                <ul className="mb-6 text-white">
                  <li className="mb-4 flex gap-2 items-center">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
                    </svg>
                    <span>Expertise at Your Fingertips</span>
                  </li>
                  <li className="mb-4 flex gap-2 items-center">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
                    </svg>
                    <span>Convenience and Accessibility</span>
                  </li>
                  <li className="mb-4 flex gap-2 items-center">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
                    </svg>
                    <span>Timely Responses</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
              <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
                <div className="mb-4 py-3 pl-3 pr-2 rounded">
                  <img
                    src="/images/fp1.jpg"
                    alt="f1"
                    className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
                  />
                </div>
                <div className="py-3 pl-3 pr-2 rounded ">
                  <img
                    src="/images/fp2.jpg"
                    alt="f2"
                    className="rounded-xl  custom-border-gray mx-auto sm:mx-unset"
                  />
                </div>
              </div>
              <div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block">
                <div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
                  <img
                    src="/images/fp3.jpg"
                    alt="f3"
                    className="rounded-xl  custom-border-gray"
                  />
                </div>
                <div className="py-3 pl-3 pr-2 rounded-lg ">
                  <img
                    src="/images/fp4.jpg"
                    alt="f4"
                    className="rounded-xl  custom-border-gray"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};