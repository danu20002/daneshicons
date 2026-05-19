import React from 'react';

export const iconData = {
  "id": "VulpinKidney",
  "name": "VulpinKidney",
  "category": "WL",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.77 4.19 L 19.81 16.77 L 7.23 19.81 L 4.19 7.23 Z"
      }
    ]
  ]
};

export const VulpinKidney = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.77 4.19 L 19.81 16.77 L 7.23 19.81 L 4.19 7.23 Z" />
      {children}
    </svg>
  );
});

export default VulpinKidney;
