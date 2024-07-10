import LayerPopup from "components/atom/layerPopup/layerPopup";
import InputsLayerPopoup from "components/molecule/layerPopup/inputsLayerPopup/inputsLayerPopup";

interface PropType {
    isOpen?: boolean 
}

export default function ApplyLayerPopup(props:PropType){
    const { isOpen } = props
    return (
        <LayerPopup isOpen={isOpen}>
            <InputsLayerPopoup/>
        </LayerPopup>
    )
}