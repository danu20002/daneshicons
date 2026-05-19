import React from 'react';

export const iconData = {
  "id": "SopranoConnect",
  "name": "SopranoConnect",
  "category": "TP",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.37 4.89 L 15.13 11.18 L 22.78 14.12 L 14.59 13.94 L 17.06 21.74 L 12.10 15.24 L 7.54 22.03 L 9.53 14.10 L 1.37 14.77 L 8.82 11.38 L 3.21 5.42 L 10.51 9.13 L 11.67 1.02 L 13.32 9.04 Z"
      }
    ]
  ]
};

export const SopranoConnect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.37 4.89 L 15.13 11.18 L 22.78 14.12 L 14.59 13.94 L 17.06 21.74 L 12.10 15.24 L 7.54 22.03 L 9.53 14.10 L 1.37 14.77 L 8.82 11.38 L 3.21 5.42 L 10.51 9.13 L 11.67 1.02 L 13.32 9.04 Z" />
      {children}
    </svg>
  );
});

export default SopranoConnect;
