type DataDescriptionProps = {
  type?: string;
  titleClassName?: string;
  valueClassName?: string;
  containerClassName?: string;
  field: string;
  value: string;
};

const DataDescription = ({
  field,
  value,
  titleClassName = "font-medium",
  valueClassName = "text-sm text-gray-500",
  containerClassName = "flex flex-col ml-2 flex-1",
}: DataDescriptionProps) => {
  return (
    <div className={containerClassName}>
      <span className={titleClassName}>{field}</span>
      <span className={valueClassName}>{value}</span>
    </div>
  );
};

export default DataDescription;
