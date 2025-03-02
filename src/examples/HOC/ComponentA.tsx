import { withLoading } from "./Hoc";

const ComponentA = function () {
  return <div>ComponentA</div>;
};

export default withLoading(ComponentA);
