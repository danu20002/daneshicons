import React from 'react';

export const iconData = {
  "id": "VeracePacket",
  "name": "VeracePacket",
  "category": "UJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.28 6.94 L 10.03 8.08 L 12.52 2.79 L 14.41 8.33 L 20.24 7.85 L 16.38 12.25 L 19.72 17.06 L 13.97 15.92 L 11.48 21.21 L 9.59 15.67 L 3.76 16.15 L 7.62 11.75 Z"
      }
    ]
  ]
};

export const VeracePacket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.28 6.94 L 10.03 8.08 L 12.52 2.79 L 14.41 8.33 L 20.24 7.85 L 16.38 12.25 L 19.72 17.06 L 13.97 15.92 L 11.48 21.21 L 9.59 15.67 L 3.76 16.15 L 7.62 11.75 Z" />
      {children}
    </svg>
  );
});

export default VeracePacket;
