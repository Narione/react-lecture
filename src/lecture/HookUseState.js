import { useState } from "react";

const HookUseState = () => {
  /* useState
        -상태(state)가 변경되는 걸 감지(상태값 변경할 수 있게 도와주는 훅)

        const [state, setState] = useState(초깃값)
        state: 현재 상태값
        setState: 상태를 업데이트 함수
        - setState는 비동기 처리
        - setState(updater(함수), [callback])
    */
  console.log("===========> redering <===========");
  /* let 변수 */
  let letNum = 0;

  /* useState 변수 */
  const [count, setCount] = useState(2);

  const addLetNum = () => {
    letNum++;
    console.log(letNum);
  };

  const addCount = () => {
    setCount(count + 1);
    // 비동기처리 때문에 count는 이전값을 출력
    console.log("count:", count);
  };

  const pnt = 0;
  const [point, setPoint] = useState(pnt);

  const addPoint = () => {
    setPoint(point + 1);
  };
  const minusPoint = () => {
    setPoint(point - 1 > 0 ? point - 1 : 0);
  };

  return (
    <>
      {/* let과 useSate의 차이 */}
      <p>letNum 값: {letNum}</p>
      <p>count 값: {count}</p>
      <button onClick={addLetNum}>letNum +</button>
      <button onClick={addCount}>count +</button>

      {/* 점수 관리
            1) 점수상태 변수
            2) 점수 +-: 1+- 함수 set 함수
        */}
      <p>현재점수: {point}</p>
      <button onClick={addPoint}>점수+</button>
      <button onClick={minusPoint}>점수-</button>
    </>
  );
};
export default HookUseState;
