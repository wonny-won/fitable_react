import { atom, RecoilState } from "recoil";

export const isOpenLayerPopup:RecoilState<boolean> = atom({
    key: 'isOpenLayerPopup', 
    default: false, 
  });