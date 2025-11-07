import AboutSnapshot from "@/components/home-layouts/about-snapshot";
import Hero, { Hero2 } from "@/components/home-layouts/hero";

const Home = () => {
  return (
    <>
      <Hero
        // headline="Smiles that shine out"
        // subheadline="Personalized orthodontic care that’s gentle, precise, and evidence-based."
        // imageSrc="/images/hero-resplendent.jpg"
        // imageAlt="Confident smile after orthodontic treatment"
      />
      <Hero2 />
      <AboutSnapshot />
    </>
  );
};
export default Home;
