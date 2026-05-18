import React from 'react';

export const iconData = {
  id: "PercentDiamond",
  name: "PercentDiamond",
  category: "P",
  nodes: [["path",{"d":"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"}],["path",{"d":"M9.2 9.2h.01"}],["path",{"d":"m14.5 9.5-5 5"}],["path",{"d":"M14.7 14.8h.01"}]]
};

export const PercentDiamond = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z" />
      <path d="M9.2 9.2h.01" />
      <path d="m14.5 9.5-5 5" />
      <path d="M14.7 14.8h.01" />
      {children}
    </svg>
  );
});

export default PercentDiamond;
