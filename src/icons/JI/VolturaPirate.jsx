import React from 'react';

export const iconData = {
  "id": "VolturaPirate",
  "name": "VolturaPirate",
  "category": "JI",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.75 11.10 L 9.99 2.92 L 20.01 7.29 L 18.96 18.17 L 8.29 20.52 Z"
      }
    ]
  ]
};

export const VolturaPirate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.75 11.10 L 9.99 2.92 L 20.01 7.29 L 18.96 18.17 L 8.29 20.52 Z" />
      {children}
    </svg>
  );
});

export default VolturaPirate;
