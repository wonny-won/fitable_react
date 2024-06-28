import HomeCahrtSection from "components/organism/sections/HomeChartSection";
import HomeReviewSection from "components/organism/sections/HomeReviewSetction";
import HomeIntro from "components/organism/sections/HomeIntro";

export default function Home (){
    return(
        <>
            <HomeIntro/>
            <HomeCahrtSection/>
            <HomeReviewSection/>
        </>
    )
}