import React from 'react';

export const iconData = {
  "id": "ViventePose",
  "name": "ViventePose",
  "category": "W",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.13 2.57 L 15.70 7.72 L 20.88 7.54 L 17.64 11.59 L 21.43 15.13 L 16.28 15.70 L 16.46 20.88 L 12.41 17.64 L 8.87 21.43 L 8.30 16.28 L 3.12 16.46 L 6.36 12.41 L 2.57 8.87 L 7.72 8.30 L 7.54 3.12 L 11.59 6.36 Z"
      }
    ]
  ]
};

export const ViventePose = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.13 2.57 L 15.70 7.72 L 20.88 7.54 L 17.64 11.59 L 21.43 15.13 L 16.28 15.70 L 16.46 20.88 L 12.41 17.64 L 8.87 21.43 L 8.30 16.28 L 3.12 16.46 L 6.36 12.41 L 2.57 8.87 L 7.72 8.30 L 7.54 3.12 L 11.59 6.36 Z" />
      {children}
    </svg>
  );
});

export default ViventePose;
