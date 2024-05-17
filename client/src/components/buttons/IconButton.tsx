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
    <button
      tabIndex={-1}
      className={`${className ? className : ""} select-none`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
