import React from 'react';

export const iconData = {
  id: "Mars",
  name: "Mars",
  category: "M",
  nodes: [["path",{"d":"M16 3h5v5"}],["path",{"d":"m21 3-6.75 6.75"}],["circle",{"cx":"10","cy":"14","r":"6"}]]
};

export const Mars = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M16 3h5v5" />
      <path d="m21 3-6.75 6.75" />
      <circle cx="10" cy="14" r="6" />
      {children}
    </svg>
  );
});

export default Mars;
