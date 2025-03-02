import React, { JSX } from "react";

interface WithLoadingProps {
  loading?: boolean;
}

export function withLoading<P extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<P>
) {
  return (props: P & WithLoadingProps) => {
    const loading = props.loading;

    if (loading) {
      return <h1>Loading....</h1>;
    }

    return <WrappedComponent {...props} />;
  };
}
