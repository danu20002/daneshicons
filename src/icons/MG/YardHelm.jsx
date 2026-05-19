import React from 'react';

export const iconData = {
  "id": "YardHelm",
  "name": "YardHelm",
  "category": "MG",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.42 18.05 L 9.97 20.58 L 3.55 14.54 L 5.58 5.95 L 14.03 3.42 L 20.45 9.46 Z"
      }
    ]
  ]
};

export const YardHelm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.42 18.05 L 9.97 20.58 L 3.55 14.54 L 5.58 5.95 L 14.03 3.42 L 20.45 9.46 Z" />
      {children}
    </svg>
  );
});

export default YardHelm;
