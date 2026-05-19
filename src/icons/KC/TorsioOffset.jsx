import React from 'react';

export const iconData = {
  "id": "TorsioOffset",
  "name": "TorsioOffset",
  "category": "KC",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.21 6.53 L 16.05 11.20 L 21.67 13.93 L 15.43 14.29 L 17.47 20.21 L 12.80 16.05 L 10.07 21.67 L 9.71 15.43 L 3.79 17.47 L 7.95 12.80 L 2.33 10.07 L 8.57 9.71 L 6.53 3.79 L 11.20 7.95 L 13.93 2.33 L 14.29 8.57 Z"
      }
    ]
  ]
};

export const TorsioOffset = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.21 6.53 L 16.05 11.20 L 21.67 13.93 L 15.43 14.29 L 17.47 20.21 L 12.80 16.05 L 10.07 21.67 L 9.71 15.43 L 3.79 17.47 L 7.95 12.80 L 2.33 10.07 L 8.57 9.71 L 6.53 3.79 L 11.20 7.95 L 13.93 2.33 L 14.29 8.57 Z" />
      {children}
    </svg>
  );
});

export default TorsioOffset;
