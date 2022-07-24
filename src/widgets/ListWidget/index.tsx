import React, { ComponentType, lazy, Suspense, useContext } from "react";
import { BrandContext } from "../../contexts/BrandContext";

const ListWidget: React.FC = () => {
  const { variant } = useContext(BrandContext);

  const DynamicVariant = lazy<ComponentType>(
    () => import(`./Variant${variant}`)
  );

  return (
    <Suspense fallback={`Loading111...`}>
      <DynamicVariant />
    </Suspense>
  );
};

export default ListWidget;
