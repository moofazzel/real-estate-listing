
import FeaturedProperties from "@/components/home/featuredProperties/FeaturedProperties";
import Banner from "@/components/banner/Banner";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <FeaturedProperties />
      <Banner />
    </Layout>
  );
}
