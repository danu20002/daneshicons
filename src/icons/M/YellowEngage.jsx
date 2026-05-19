import React from 'react';

export const iconData = {
  "id": "YellowEngage",
  "name": "YellowEngage",
  "category": "M",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.70 19.11 L 13.78 20.95 L 11.50 9.98 L 12.21 14.88 L 18.81 2.59 L 19.90 7.47 L 16.10 5.10"
      }
    ],
    [
      "path",
      {
        "d": "M 11.84 17.73 C 7.00 12.46, 8.51 10.56, 14.82 12.04"
      }
    ]
  ]
};

export const YellowEngage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.70 19.11 L 13.78 20.95 L 11.50 9.98 L 12.21 14.88 L 18.81 2.59 L 19.90 7.47 L 16.10 5.10" />
      <path d="M 11.84 17.73 C 7.00 12.46, 8.51 10.56, 14.82 12.04" />
      {children}
    </svg>
  );
});

export default YellowEngage;
