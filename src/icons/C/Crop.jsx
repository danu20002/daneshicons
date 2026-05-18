import React from 'react';

export const iconData = {
  id: "Crop",
  name: "Crop",
  category: "C",
  nodes: [["path",{"d":"M6 2v14a2 2 0 0 0 2 2h14"}],["path",{"d":"M18 22V8a2 2 0 0 0-2-2H2"}]]
};

export const Crop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M6 2v14a2 2 0 0 0 2 2h14" />
      <path d="M18 22V8a2 2 0 0 0-2-2H2" />
      {children}
    </svg>
  );
});

export default Crop;
