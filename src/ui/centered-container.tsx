import type { ReactNode } from "react";

type CenteredContainerProps = {
  cointainerClass?: string;
  children?: ReactNode;
};
const CenteredCointainer = ({
  children,
  cointainerClass = "p-5 bg-white rounded-md flex items-center justify-between border-b py-2",
}: CenteredContainerProps) => {
  return <div className={cointainerClass}>{children}</div>;
};

export default CenteredCointainer;
