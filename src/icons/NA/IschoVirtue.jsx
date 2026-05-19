import React from 'react';

export const iconData = {
  "id": "IschoVirtue",
  "name": "IschoVirtue",
  "category": "NA",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.45 11.07 L 15.72 13.36 L 18.62 18.81 L 13.26 15.76 L 10.80 21.42 L 9.84 15.33 L 3.89 16.94 L 8.06 12.39 L 3.08 8.74 L 9.24 9.16 L 8.99 2.99 L 12.50 8.07 L 17.17 4.03 L 15.39 9.94 Z"
      }
    ]
  ]
};

export const IschoVirtue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.45 11.07 L 15.72 13.36 L 18.62 18.81 L 13.26 15.76 L 10.80 21.42 L 9.84 15.33 L 3.89 16.94 L 8.06 12.39 L 3.08 8.74 L 9.24 9.16 L 8.99 2.99 L 12.50 8.07 L 17.17 4.03 L 15.39 9.94 Z" />
      {children}
    </svg>
  );
});

export default IschoVirtue;
