import React from 'react';

export const iconData = {
  id: "CloudAlert",
  name: "CloudAlert",
  category: "C",
  nodes: [["path",{"d":"M12 12v4"}],["path",{"d":"M12 20h.01"}],["path",{"d":"M8.128 16.949A7 7 0 1 1 15.71 8h1.79a1 1 0 0 1 0 9h-1.642"}]]
};

export const CloudAlert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M12 12v4" />
      <path d="M12 20h.01" />
      <path d="M8.128 16.949A7 7 0 1 1 15.71 8h1.79a1 1 0 0 1 0 9h-1.642" />
      {children}
    </svg>
  );
});

export default CloudAlert;
