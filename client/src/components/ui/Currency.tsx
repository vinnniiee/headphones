import RupeeIcon from "../assets/RupeeIcon";

const Currency = ({
  amount,
  className,
  color,
  size
}: {
  amount: number;
  className?: string;
  color?: string;
  size?:number;
}) => {
  return (
    <div
      className={`flex items-center gap-0.5 ${
        color === "white" ? "text-white/70" : "text-black/70"
      } ${className}`}
    >
      <RupeeIcon size={size} color={color} />
      {amount.toFixed(2)}
    </div>
  );
};

export default Currency;
