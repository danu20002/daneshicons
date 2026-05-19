import React from 'react';

export const iconData = {
  "id": "GyroShallow",
  "name": "GyroShallow",
  "category": "PD",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.85 5.06 L 20.45 11.46 L 17.69 18.27 L 10.65 20.36 L 4.62 16.15 L 4.15 8.82 L 9.59 3.88 Z"
      }
    ]
  ]
};

export const GyroShallow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.85 5.06 L 20.45 11.46 L 17.69 18.27 L 10.65 20.36 L 4.62 16.15 L 4.15 8.82 L 9.59 3.88 Z" />
      {children}
    </svg>
  );
});

export default GyroShallow;
