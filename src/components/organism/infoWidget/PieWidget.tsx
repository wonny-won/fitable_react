import PieChart from "components/atom/charts/pie/pieChart";
import WidgetFrame from "components/molecule/widget/widgetFrame";

export default function BarWidget(){
    return (
        <WidgetFrame>
            <PieChart/>
        </WidgetFrame>
    )
}