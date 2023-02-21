import FeaturedProperties from "@/components/home/featuredProperties/FeaturedProperties";
import Banner from "@/components/banner/Banner";
import Layout from "@/components/layout/Layout";

import PropertiesByCities from "@/components/propertiesByCities/PropertiesByCities";
import WhyChooseUs from "@/components/home/WhyChooseUs";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Banner />
      <FeaturedProperties />
      <PropertiesByCities />
      <WhyChooseUs />
    </Layout>
  );
}
