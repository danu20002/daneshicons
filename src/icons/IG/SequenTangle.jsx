import React from 'react';

export const iconData = {
  "id": "SequenTangle",
  "name": "SequenTangle",
  "category": "IG",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.11 7.76 L 16.10 19.76 L 13.99 8.48 L 20.06 5.92 L 20.86 21.32 L 17.73 14.21 L 20.06 9.95"
      }
    ],
    [
      "path",
      {
        "d": "M 18.43 19.05 C 15.49 14.10, 3.02 17.76, 7.34 17.93"
      }
    ]
  ]
};

export const SequenTangle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.11 7.76 L 16.10 19.76 L 13.99 8.48 L 20.06 5.92 L 20.86 21.32 L 17.73 14.21 L 20.06 9.95" />
      <path d="M 18.43 19.05 C 15.49 14.10, 3.02 17.76, 7.34 17.93" />
      {children}
    </svg>
  );
});

export default SequenTangle;
