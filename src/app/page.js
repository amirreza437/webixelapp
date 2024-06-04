import ArticlesGrid from "@/components/HomePage/ArticlesGrid";
import CrashingCards from "@/components/HomePage/CrashingCards";
import FAQ from "@/components/HomePage/FAQ";
import InstagramBanner from "@/components/HomePage/InstagramBanner";
import LandingCard from "@/components/HomePage/LandingCard";
import PodCastsGrid from "@/components/HomePage/PodcastsGrid";
import RoadMapGrid from "@/components/HomePage/RoadMapGrid";




export default function MainPage() {
  return (
    <div className="font-iranYekan" dir="rtl">
      <LandingCard />
      <ArticlesGrid />
      <RoadMapGrid />
      <InstagramBanner />
      <PodCastsGrid />
      <CrashingCards />
      <FAQ />
    </div>
  )
}