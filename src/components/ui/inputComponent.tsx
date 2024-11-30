import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  label: string;
  error: string;
}
export const InputFieldComponent: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  id,
  label,
  error,
}) => {
  return (
    <div className="input_container">
      <label htmlFor={id}>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
      />
      <span className="error">{error}</span>
    </div>
  );
};

export const CommentInputField: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  id,
  error,
}) => {
  return (
    <div className="comment_input">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        id={id}
        onChange={onChange}
      />

      {error && <span className="error">{error}</span>}
    </div>
  );
};
