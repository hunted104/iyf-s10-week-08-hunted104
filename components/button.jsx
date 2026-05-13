function Button({
  text = "Click Me",
  variant = "primary",
  disabled = false
}) {
  return (
    <button className={variant} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;
