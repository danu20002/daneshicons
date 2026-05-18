import React from 'react';

export const iconData = {
  id: "Martini",
  name: "Martini",
  category: "M",
  nodes: [["path",{"d":"M8 22h8"}],["path",{"d":"M12 11v11"}],["path",{"d":"m19 3-7 8-7-8Z"}]]
};

export const Martini = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M8 22h8" />
      <path d="M12 11v11" />
      <path d="m19 3-7 8-7-8Z" />
      {children}
    </svg>
  );
});

export default Martini;
