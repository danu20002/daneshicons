import React from 'react';

export const iconData = {
  id: "Tent",
  name: "Tent",
  category: "T",
  nodes: [["path",{"d":"M3.5 21 14 3"}],["path",{"d":"M20.5 21 10 3"}],["path",{"d":"M15.5 21 12 15l-3.5 6"}],["path",{"d":"M2 21h20"}]]
};

export const Tent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M3.5 21 14 3" />
      <path d="M20.5 21 10 3" />
      <path d="M15.5 21 12 15l-3.5 6" />
      <path d="M2 21h20" />
      {children}
    </svg>
  );
});

export default Tent;
