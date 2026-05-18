import React from 'react';

export const iconData = {
  id: "CornerLeftDown",
  name: "CornerLeftDown",
  category: "C",
  nodes: [["path",{"d":"m14 15-5 5-5-5"}],["path",{"d":"M20 4h-7a4 4 0 0 0-4 4v12"}]]
};

export const CornerLeftDown = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="m14 15-5 5-5-5" />
      <path d="M20 4h-7a4 4 0 0 0-4 4v12" />
      {children}
    </svg>
  );
});

export default CornerLeftDown;
