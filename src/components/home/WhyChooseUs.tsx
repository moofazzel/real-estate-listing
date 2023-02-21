import Image from "next/image";
import Title from "../shared/Title";

function WhyChooseUs() {
  return (
    <div className="bg-bgGrey py-12">
      <div>
        <Title title="Why Choose Us" />
        <p className="text-center">We provide full service at every step</p>
      </div>
      <div>
        <div>
          <Image
            width={150}
            height={150}
            src="/assets/icons/high-five.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
