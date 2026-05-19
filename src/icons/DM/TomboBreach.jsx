import React from 'react';

export const iconData = {
  "id": "TomboBreach",
  "name": "TomboBreach",
  "category": "DM",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.16 20.95 L 5.83 19.21 L 2.67 10.26 L 8.84 3.05 L 18.17 4.79 L 21.33 13.74 Z"
      }
    ]
  ]
};

export const TomboBreach = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.16 20.95 L 5.83 19.21 L 2.67 10.26 L 8.84 3.05 L 18.17 4.79 L 21.33 13.74 Z" />
      {children}
    </svg>
  );
});

export default TomboBreach;
