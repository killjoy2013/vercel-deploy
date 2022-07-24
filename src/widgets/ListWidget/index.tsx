import React, { ComponentType, lazy, Suspense } from "react";
import { IWidgetProps } from "../../interfaces/IWidgetProps";
import IListWidget from "./interfaces/IListWidget";

const index: React.FC<IListWidget> = ({ variant }) => {
  const DynamicVariant = lazy<ComponentType<IWidgetProps>>(
    () => import(`./Variant${variant}`)
  );

  return (
    <Suspense fallback={`Loading111...`}>
      <DynamicVariant variant={variant} />
    </Suspense>
  );
};

export default index;
