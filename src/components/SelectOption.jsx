export function SelectOption({
  options,
  label,
  isLoyer,
  filterName,
  setFilter
}) {
  return (
    <>
      {label ? (
        <label className="search-filter">
          <span>{label}</span>
          <div className="custom-select">
            <select
              onChange={(event) => {
                setFilter((prev) => ({
                  ...prev,
                  [filterName]: event.target.value
                }));
              }}
            >
              {options.map((option, index) => (
                <option
                  key={index}
                  value={
                    option === "Any"
                      ? option.toLowerCase()
                      : isLoyer === "true"
                      ? option.toLowerCase()
                      : option
                  }
                >
                  {option}
                </option>
              ))}
            </select>
          </div>
        </label>
      ) : (
        <label className="search-filter">
          <div className="custom-select">
            <select>
              {options.map((option) => (
                <option>{option}</option>
              ))}
            </select>
          </div>
        </label>
      )}
    </>
  );
}
