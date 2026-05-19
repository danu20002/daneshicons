import React from 'react';

export const iconData = {
  "id": "FrigoPath",
  "name": "FrigoPath",
  "category": "DN",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.80 2.91 L 15.25 8.29 L 20.77 9.01 L 16.84 12.96 L 18.98 18.10 L 13.59 16.67 L 10.20 21.09 L 8.75 15.71 L 3.23 14.99 L 7.16 11.04 L 5.02 5.90 L 10.41 7.33 Z"
      }
    ]
  ]
};

export const FrigoPath = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.80 2.91 L 15.25 8.29 L 20.77 9.01 L 16.84 12.96 L 18.98 18.10 L 13.59 16.67 L 10.20 21.09 L 8.75 15.71 L 3.23 14.99 L 7.16 11.04 L 5.02 5.90 L 10.41 7.33 Z" />
      {children}
    </svg>
  );
});

export default FrigoPath;
