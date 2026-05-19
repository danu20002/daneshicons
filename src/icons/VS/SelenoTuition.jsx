import React from 'react';

export const iconData = {
  "id": "SelenoTuition",
  "name": "SelenoTuition",
  "category": "VS",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.48 20.08 L 5.36 16.63 L 4.24 9.70 L 8.96 4.49 L 15.97 4.95 L 19.99 10.71 L 17.99 17.44 Z"
      }
    ]
  ]
};

export const SelenoTuition = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.48 20.08 L 5.36 16.63 L 4.24 9.70 L 8.96 4.49 L 15.97 4.95 L 19.99 10.71 L 17.99 17.44 Z" />
      {children}
    </svg>
  );
});

export default SelenoTuition;
