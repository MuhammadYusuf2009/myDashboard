import React, { Suspense } from "react";
import Loader from "../loader";

const Loadable = (Component) => {
  console.log(Component);
  const WrappedComponent = (props) => (
    <Suspense fallback={<Loader loading={true} />}>
      <Component {...props} />
    </Suspense>
  );

  return WrappedComponent;
};

export default Loadable;
