// 1. component level state -> state management ->

import React, { useImperativeHandle, useRef, useState } from "react";

////////////////////////////////
// 3. lifting the state up

const ChildComponent1 = React.forwardRef((props, ref) => {
  const [counter, setCounter] = useState(10);

  useImperativeHandle(
    ref,
    () => {
      return {
        // key: values
        sc: setCounter,
        c: counter,
      };
    },
    [counter]
  );

  return (
    <div>
      <h1> child-component: {counter}</h1>
    </div>
  );
});

export const UseState = function () {
  const ref = useRef(null);

  const handler = function () {
    if (ref.current) {
      ref.current.sc(ref.current.c + 1);
    }
  };

  return (
    <>
      <ChildComponent1 ref={ref} />
      <button onClick={handler}> pr Click</button>
    </>
  );
};

////////////////////////////////

////////////////////////////////
// 2. data pass down.( state )
// const ChildComponent2 = function (props) {
//   //   return <h1> child-component-2: {props.c2}</h1>;
//   return <h1> child-component-2: {props.c}</h1>;
// };

// const ChildComponent = function (props) {
//   console.log(props);

//   return (
//     <React.Fragment>
//       <h1> child-component: {props.c}</h1>
//       <ChildComponent2 {...props} />
//       {/* <ChildComponent2 c2={props.c} /> */}
//     </React.Fragment>
//   );
// };

// export const UseState = function () {
//   const [counter, setCounter] = useState(10);

//   const obj = {
//     a: 10,
//     b: 20,
//   };

//   return (
//     <div>
//       Component level state
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter((prev) => prev + 1)}>Update</button>
//       <ChildComponent c={counter} {...obj} />
//       {/* <ChildComponent c={counter} {...obj} data={obj.a} /> */}
//     </div>
//   );
// };
////////////////////////////////

////////////////////////////////
//1. state created inside the component and also used inside the component
// export const UseState = function () {
//   const [counter, setCounter] = useState(10);

//   return (
//     <div>
//       Component level state
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter((prev) => prev + 1)}>Update</button>
//     </div>
//   );
// };
////////////////////////////////
