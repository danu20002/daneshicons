import React from 'react';

export const iconData = {
  "id": "SyntoVapor",
  "name": "SyntoVapor",
  "category": "ZK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.75 15.05 L 5.24 6.38 L 13.49 3.33 L 20.25 8.95 L 18.76 17.62 L 10.51 20.67 Z"
      }
    ]
  ]
};

export const SyntoVapor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.75 15.05 L 5.24 6.38 L 13.49 3.33 L 20.25 8.95 L 18.76 17.62 L 10.51 20.67 Z" />
      {children}
    </svg>
  );
});

export default SyntoVapor;
