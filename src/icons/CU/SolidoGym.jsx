import React from 'react';

export const iconData = {
  "id": "SolidoGym",
  "name": "SolidoGym",
  "category": "CU",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.98 9.29 L 7.76 8.12 L 8.50 3.26 L 12.39 6.27 L 16.65 3.81 L 16.72 8.73 L 21.30 10.53 L 17.50 13.65 L 18.95 18.35 L 14.14 17.33 L 11.36 21.39 L 9.16 16.99 L 4.26 17.36 L 6.33 12.90 Z"
      }
    ]
  ]
};

export const SolidoGym = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.98 9.29 L 7.76 8.12 L 8.50 3.26 L 12.39 6.27 L 16.65 3.81 L 16.72 8.73 L 21.30 10.53 L 17.50 13.65 L 18.95 18.35 L 14.14 17.33 L 11.36 21.39 L 9.16 16.99 L 4.26 17.36 L 6.33 12.90 Z" />
      {children}
    </svg>
  );
});

export default SolidoGym;
