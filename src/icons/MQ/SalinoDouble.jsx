import React from 'react';

export const iconData = {
  "id": "SalinoDouble",
  "name": "SalinoDouble",
  "category": "MQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.45 18.87 Q 13.24 15.80 6.04 18.10"
      }
    ],
    [
      "path",
      {
        "d": "M 13.04 20.76 L 14.00 6.24 L 8.16 8.51"
      }
    ]
  ]
};

export const SalinoDouble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.45 18.87 Q 13.24 15.80 6.04 18.10" />
      <path d="M 13.04 20.76 L 14.00 6.24 L 8.16 8.51" />
      {children}
    </svg>
  );
});

export default SalinoDouble;
