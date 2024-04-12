import GraphicRoadMapGrid from "@/components/RoadMapsPage/GraphicRoadMapGrid";
import ProgrammingRoadMapGrid from "@/components/RoadMapsPage/ProgrammingRoadMapGrid";
import RoadMapsPageLandingCard from "@/components/RoadMapsPage/RoadMapsPageLandingCard";




export default function RoadMapsPage() {
    return (
        <div className="container mx-auto max-w-[1288px] p-10 mt-5 sm:mt-10">
            <RoadMapsPageLandingCard />
            <ProgrammingRoadMapGrid />
            <GraphicRoadMapGrid />
        </div>
    )
}