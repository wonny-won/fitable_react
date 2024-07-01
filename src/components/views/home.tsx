import HomeCahrtSection from "components/organism/sections/home/HomeChartSection";
import HomeReviewSection from "components/organism/sections/home/HomeReviewSetction";
import HomeIntroSection from "components/organism/sections/home/HomeIntroSection";

export default function Home (){
    return(
        <>
            <HomeIntroSection/>
            <HomeCahrtSection/>
            <HomeReviewSection/>
        </>
    )
}