import { motion } from "framer-motion";


const testimonialsData = [
  {
    customerName: "Satya Venugopal",
    customerTitle: "IT Manager",
    content:
      "I found a piece of land I loved. It felt perfect for building my dream home. Excitement filled me as I got closer to buying it. Then, a friend said I should talk to a lawyer first. Reluctantly, I did. Turns out, there was a crucial document missing that could cause big legal problems later. It was a shock. I realized how close I came to making a huge mistake. Thankfully, the lawyer helped me step back and avoid a disaster. It taught me to always check everything, especially with big decisions like buying property.",
    image: "/images/t1.jpg",
  },
  {
    customerName: "Amit Kumar",
    customerTitle: "Shop Owner",
    content:
      "When my employer failed to pay my hard-earned wages, I felt powerless and betrayed. Fortunately, seeking legal counsel proved to be my saving grace. With the advocate's guidance and expertise, I navigated the complexities and successfully recovered the amount owed to me. It was a relief to see justice served, reinforcing the importance of legal protection in safeguarding workers' rights and ensuring fair compensation for honest labor.",
    image: "/images/t2.jpg",
  },
  {
    customerName: "Krishnarajan Narayanan",
    customerTitle: "Farmer",
    content:
      "Divorce brought a whirlwind of emotions, but having an advocate by my side was crucial. Their unwavering support and expert guidance helped me navigate the intricate legal proceedings with clarity and confidence. From filing paperwork to negotiating settlements, their presence ensured every step was handled with care. It was a journey marked by challenges and uncertainties, but with my advocate, I found reassurance and a path forward towards a new beginning.",
    image: "/images/t3.jpg",
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Testimonials
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
          Feedback from users
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="2em" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
              </div>
              <div className="custom-content-text-white">
                "{testimonial.content}"
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <img src={testimonial.image} alt="" className="rounded-full w-[45px] h-[45px] object-cover" />
                <div className="flex flex-col ml-4">
                  <div className="custom-content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="custom-content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);