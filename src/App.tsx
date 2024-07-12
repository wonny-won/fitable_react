import RoutesCompoents from "Routes";
import LayoutPage from "components/templates/layoutPage";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
   <RecoilRoot>
    <LayoutPage>
       <RoutesCompoents />
    </LayoutPage>
   </RecoilRoot>
  );
}

export default App;
