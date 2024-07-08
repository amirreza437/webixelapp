import ArticlesGrid from "@/components/HomePage/ArticlesGrid";
import CoursesGrid from "@/components/HomePage/CoursesGrid";
import CrashingCards from "@/components/HomePage/CrashingCards";
import FAQ from "@/components/HomePage/FAQ";
import InstagramBanner from "@/components/HomePage/InstagramBanner";
import LandingCard from "@/components/HomePage/LandingCard";
import PodCastsGrid from "@/components/HomePage/PodcastsGrid";




export default function MainPage() {
  return (
    <div className="font-iranYekan" dir="rtl">
      <LandingCard />
      <ArticlesGrid />
      <CoursesGrid />
      <InstagramBanner />
      <CrashingCards />
      <FAQ />
    </div>
  )
}