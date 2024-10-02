export const SearchBar: React.FC<{
  value: string;
  onChangeFunction: (payload: string) => void;
}> = ({ value, onChangeFunction }) => {
  return (
    <input className="list-text-container" value={value} onChange={(e) => onChangeFunction(e.target.value)} placeholder="Search Drivers"/>
  );
};
