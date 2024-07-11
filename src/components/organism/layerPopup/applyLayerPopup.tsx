import LayerPopup from "components/atom/layerPopup/layerPopup";
import InputsLayerPopoupContents from "components/molecule/layerPopup/inputsLayerPopup/inputsLayerPopupContents";

interface PropType {
    isOpen?: boolean 
}

export default function ApplyLayerPopup(props:PropType){
    const { isOpen } = props
    return (
        <LayerPopup isOpen={isOpen}>
            <InputsLayerPopoupContents/>
        </LayerPopup>
    )
}