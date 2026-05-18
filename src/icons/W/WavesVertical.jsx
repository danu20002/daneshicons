import React from 'react';

export const iconData = {
  id: "WavesVertical",
  name: "WavesVertical",
  category: "W",
  nodes: [["path",{"d":"M12 2q2 2.5 0 5t0 5 0 5 0 5"}],["path",{"d":"M19 2q2 2.5 0 5t0 5 0 5 0 5"}],["path",{"d":"M5 2q2 2.5 0 5t0 5 0 5 0 5"}]]
};

export const WavesVertical = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M12 2q2 2.5 0 5t0 5 0 5 0 5" />
      <path d="M19 2q2 2.5 0 5t0 5 0 5 0 5" />
      <path d="M5 2q2 2.5 0 5t0 5 0 5 0 5" />
      {children}
    </svg>
  );
});

export default WavesVertical;
