import React, { lazy } from "react";

interface ListWidgetProps {
  variant: number;
}

const index: React.FC<ListWidgetProps> = ({ variant }) => {
  const Variant = lazy(() => import(`./Variant${variant}`));

  return (
    <div>
      <Variant />
    </div>
  );
};

export default index;
