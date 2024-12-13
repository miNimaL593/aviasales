import {FC} from "react";
import './Checkbox.scss'

type CheckboxProps = {
  checked: boolean | undefined,
  text: string,
  onChange: () => void,
}

const Checkbox: FC<CheckboxProps> = ({ checked, text, onChange }) => {


  return (
    <label className="checkbox">
      <input
        onChange={onChange}
        type="checkbox"
        checked={checked}
      />
      {text && <span>{text}</span>}
    </label>
  )
}

export default Checkbox