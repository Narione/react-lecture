import "./App.css";
import HookUseState from "./lecture/HookUseState";
import JsxRolues from "./lecture/jsxRolues";
import JsxRolues_m from "./mission/jsxRolues";
import HookUseState_m from "./mission/HookUseState";
import HookUseEffect from "./lecture/HookUseEffect";
import HookUseEffect_m from "./mission/HookUseEffect";
function App() {
  return (
    <div className="App">
      {/* 설명 컴포넌트 */}
      {/* <JsxRolues /> */}
      {/* <HookUseState /> */}
      {/* <HookUseEffect /> */}

      {/* 미션 컴포넌트 */}
      {/* <JsxRolues_m /> */}
      {/* <HookUseState_m /> */}
      <HookUseEffect_m />
    </div>
  );
}

export default App;
