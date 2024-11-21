import React from "react";

// Definimos las propiedades con un tipo genérico.
type ButtonProps<T> = {
  value: T;
  onClick?: () => void;
  disabled?: boolean;
};

// Componente Button usando un tipo genérico para permitir diferentes tipos de valor.
const Button = <T extends unknown>({
  value,
  onClick,
  disabled,
}: ButtonProps<T>) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {String(value)}{" "}
      {/* Convertimos el valor a string para que se pueda mostrar en el botón */}
    </button>
  );
};

export default Button;
