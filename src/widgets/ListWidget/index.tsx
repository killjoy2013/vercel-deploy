import React, { lazy, Suspense } from "react";
import dynamic from "next/dynamic";

import Variant1 from "./Variant1";

interface ListWidgetProps {
  variant: number;
}

const index: React.FC<ListWidgetProps> = ({ variant }) => {
  const DynamicVariant = lazy(() => import(`./Variant${variant}`));

  return (
    <Suspense fallback={`Loading...`}>
      <DynamicVariant />
    </Suspense>
  );
};

export default index;
