import HomeCahrtSection from "components/organism/home/HomeChartSection";
import HomeReviewSection from "components/organism/home/HomeReviewSetction";
import HomeIntroSection from "components/organism/home/HomeIntroSection";

export default function Home (){
    return(
        <>
            <HomeIntroSection/>
            <HomeCahrtSection/>
            <HomeReviewSection/>
        </>
    )
}