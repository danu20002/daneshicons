import React from 'react';

export const iconData = {
  id: "Move3d",
  name: "Move3d",
  category: "M",
  nodes: [["path",{"d":"M5 3v16h16"}],["path",{"d":"m5 19 6-6"}],["path",{"d":"m2 6 3-3 3 3"}],["path",{"d":"m18 16 3 3-3 3"}]]
};

export const Move3d = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M5 3v16h16" />
      <path d="m5 19 6-6" />
      <path d="m2 6 3-3 3 3" />
      <path d="m18 16 3 3-3 3" />
      {children}
    </svg>
  );
});

export default Move3d;
