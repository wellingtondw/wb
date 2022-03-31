import theme from "../../styles/theme";

type IconProps = {
  icon: string;
  size?: number;
};

export const Icon = ({ icon, size, ...props }: IconProps) => {
  return (
    <span
      className={`icon-${icon}`}
      style={{ fontSize: size || theme.font.sizes.xxxlarge }}
      {...props}
    ></span>
  );
};
