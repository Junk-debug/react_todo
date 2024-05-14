interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  className,
}) => {
  return (
    <button className={`${className ? className : ""}`} onClick={onClick}>
      {icon}
    </button>
  );
};

export default IconButton;
