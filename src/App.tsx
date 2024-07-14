import RoutesCompoents from "Routes";
import LayoutPage from "components/templates/layout/layoutPage";
import {
  RecoilRoot,
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
