import React from "react";

// Definimos un tipo genérico para las propiedades del campo de entrada.
type InputFieldProps<T> = {
  value: T;
  onChange: (newValue: T) => void;
  placeholder?: string;
};

const InputField = <T extends string | number>({
  value,
  onChange,
  placeholder,
}: InputFieldProps<T>) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (typeof value === "number" && isNaN(Number(newValue))) {
      console.error("Invalid input: expected a number.");
      return;
    }

    onChange(newValue as T); // Llamamos a onChange con el nuevo valor.
  };

  return (
    <input
      type={typeof value === "number" ? "number" : "text"} // Ajustamos el tipo de input según el tipo de valor.
      value={String(value)} // Convertimos el valor a string
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default InputField;
