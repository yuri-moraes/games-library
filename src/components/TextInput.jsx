import ProptTypes from "prop-types";

TextInput.propTypes = {
  id: ProptTypes.string,
  label: ProptTypes.string,
  setValue: ProptTypes.func,
  value: ProptTypes.string,
};

export default function TextInput({ id, label, setValue, value }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" name={id} id={id} onChange={setValue} value={value} />
    </div>
  );
}
