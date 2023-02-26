import FeaturedProperties from "@/components/home/featuredProperties/FeaturedProperties";
import Banner from "@/components/banner/Banner";
import Layout from "@/components/layout/Layout";

import PropertiesByCities from "@/components/propertiesByCities/PropertiesByCities";
import TestimonialSlider from "@/components/home/testimonialSlider/TestimonialSlider";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurPartners from "@/components/home/OurPartners";
import BecomeAgent from "@/components/home/BecomeAgent";
import ArticlesTips from "@/components/home/articlesAndTips/ArticlesTips";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Banner />
      <FeaturedProperties />
      <PropertiesByCities />
      <WhyChooseUs />
      <TestimonialSlider />
      <ArticlesTips />
      <OurPartners />
      <BecomeAgent />
    </Layout>
  );
}
