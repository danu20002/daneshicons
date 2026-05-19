import React from 'react';

export const iconData = {
  "id": "VulpinNet",
  "name": "VulpinNet",
  "category": "SB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.89 15.05 L 4.56 7.56 L 10.83 3.42 L 17.98 5.73 L 20.63 12.77 L 16.78 19.23 L 9.33 20.24 Z"
      }
    ]
  ]
};

export const VulpinNet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.89 15.05 L 4.56 7.56 L 10.83 3.42 L 17.98 5.73 L 20.63 12.77 L 16.78 19.23 L 9.33 20.24 Z" />
      {children}
    </svg>
  );
});

export default VulpinNet;
