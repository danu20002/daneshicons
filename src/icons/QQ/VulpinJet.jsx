import React from 'react';

export const iconData = {
  "id": "VulpinJet",
  "name": "VulpinJet",
  "category": "QQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.45 5.17 L 15.64 4.64 L 20.19 11.47 L 16.55 18.83 L 8.36 19.36 L 3.81 12.53 Z"
      }
    ]
  ]
};

export const VulpinJet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.45 5.17 L 15.64 4.64 L 20.19 11.47 L 16.55 18.83 L 8.36 19.36 L 3.81 12.53 Z" />
      {children}
    </svg>
  );
});

export default VulpinJet;
