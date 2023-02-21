import Image from "next/image";
import cl1 from "../../../../public/assets/testimonial-sl-image/cl1.png";

const TestimonialSlider = () => {
  return (
    <section className="py-14 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Image
            src={cl1}
            alt="Client image"
            className="w-[110px] h-[110px] rounded-full border-[3px] border-white"
            shadow-xl
            shadow-gray-400
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
