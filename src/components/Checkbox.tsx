export const Checkbox: React.FC<{ value: boolean }> = ({ value }) => {
  return (
      <div className={value ? "checkbox checked" : "checkbox"} />
  );
};
