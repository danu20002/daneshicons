import React from 'react';

export const iconData = {
  id: "ChevronFirst",
  name: "ChevronFirst",
  category: "C",
  nodes: [["path",{"d":"m17 18-6-6 6-6"}],["path",{"d":"M7 6v12"}]]
};

export const ChevronFirst = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="m17 18-6-6 6-6" />
      <path d="M7 6v12" />
      {children}
    </svg>
  );
});

export default ChevronFirst;
