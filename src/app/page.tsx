import { Hero } from "@/components/home/hero";
import { FeaturedMeals } from "@/components/home/featured-meals";
import { Categories } from "@/components/home/categories";
import { FamilyMealsSection } from "@/components/home/family-meals-section";
import { AboutTeaser } from "@/components/home/about-teaser";
import { WhyMrsMeddy } from "@/components/home/why-mrs-meddy";
import { WeeklyMenuSection } from "@/components/home/weekly-menu-section";
import { PreorderTeaser } from "@/components/home/preorder-teaser";
import { Testimonials } from "@/components/home/testimonials";
import { Newsletter } from "@/components/home/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedMeals />
      <Categories />
      <FamilyMealsSection />
      <AboutTeaser />
      <WhyMrsMeddy />
      <WeeklyMenuSection />
      <PreorderTeaser />
      <Testimonials />
      <Newsletter />
    </>
  );
}
