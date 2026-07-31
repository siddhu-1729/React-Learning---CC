interface ButtonProps {
  title: string;
  onClick: () => void;
}

function Button({ title, onClick }: ButtonProps) {
  return (
    <button className="btn" onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;