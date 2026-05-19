import React from 'react';

export const iconData = {
  "id": "StyloWarm",
  "name": "StyloWarm",
  "category": "KS",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.92 17.97 L 8.15 19.47 L 3.70 10.65 L 10.72 3.69 L 19.51 8.21 Z"
      }
    ]
  ]
};

export const StyloWarm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.92 17.97 L 8.15 19.47 L 3.70 10.65 L 10.72 3.69 L 19.51 8.21 Z" />
      {children}
    </svg>
  );
});

export default StyloWarm;
