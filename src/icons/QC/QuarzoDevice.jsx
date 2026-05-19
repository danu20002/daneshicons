import React from 'react';

export const iconData = {
  "id": "QuarzoDevice",
  "name": "QuarzoDevice",
  "category": "QC",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.75 9.69 C 12.92 7.12, 11.06 5.71, 17.87 18.10"
      }
    ],
    [
      "path",
      {
        "d": "M 9.96 8.23 C 7.78 15.25, 17.79 6.67, 16.33 21.08"
      }
    ],
    [
      "path",
      {
        "d": "M 8.14 6.98 C 8.50 15.69, 16.76 6.53, 14.70 17.57"
      }
    ]
  ]
};

export const QuarzoDevice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.75 9.69 C 12.92 7.12, 11.06 5.71, 17.87 18.10" />
      <path d="M 9.96 8.23 C 7.78 15.25, 17.79 6.67, 16.33 21.08" />
      <path d="M 8.14 6.98 C 8.50 15.69, 16.76 6.53, 14.70 17.57" />
      {children}
    </svg>
  );
});

export default QuarzoDevice;
