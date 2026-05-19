import React from 'react';

export const iconData = {
  "id": "MycoInstant",
  "name": "MycoInstant",
  "category": "EZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.92 8.30 L 8.57 8.21 L 9.23 2.60 L 12.83 6.96 L 17.63 3.97 L 16.46 9.50 L 21.78 11.39 L 16.73 13.93 L 18.57 19.27 L 13.44 16.90 L 10.41 21.67 L 9.07 16.18 L 3.45 16.79 L 6.90 12.32 Z"
      }
    ]
  ]
};

export const MycoInstant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.92 8.30 L 8.57 8.21 L 9.23 2.60 L 12.83 6.96 L 17.63 3.97 L 16.46 9.50 L 21.78 11.39 L 16.73 13.93 L 18.57 19.27 L 13.44 16.90 L 10.41 21.67 L 9.07 16.18 L 3.45 16.79 L 6.90 12.32 Z" />
      {children}
    </svg>
  );
});

export default MycoInstant;
