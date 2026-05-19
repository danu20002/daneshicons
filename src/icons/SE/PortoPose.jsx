import React from 'react';

export const iconData = {
  "id": "PortoPose",
  "name": "PortoPose",
  "category": "SE",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.49 20.30 L 11.49 15.79 L 5.49 18.83 L 8.24 12.69 L 3.49 7.92 L 10.18 8.64 L 13.25 2.64 L 14.63 9.23 L 21.28 10.30 L 15.45 13.65 Z"
      }
    ]
  ]
};

export const PortoPose = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.49 20.30 L 11.49 15.79 L 5.49 18.83 L 8.24 12.69 L 3.49 7.92 L 10.18 8.64 L 13.25 2.64 L 14.63 9.23 L 21.28 10.30 L 15.45 13.65 Z" />
      {children}
    </svg>
  );
});

export default PortoPose;
