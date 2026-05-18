import React from 'react';

export const iconData = {
  id: "Slash",
  name: "Slash",
  category: "S",
  nodes: [["path",{"d":"M22 2 2 22"}]]
};

export const Slash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M22 2 2 22" />
      {children}
    </svg>
  );
});

export default Slash;
