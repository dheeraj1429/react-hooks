export const hoc = function (WrappedComponent) {
  const InComponent = (props) => {
    if (props.isLoading) return <h1>Loading...</h1>;
    return <WrappedComponent {...props} />;
  };
  return InComponent;
};
