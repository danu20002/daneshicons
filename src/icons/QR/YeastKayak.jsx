import React from 'react';

export const iconData = {
  "id": "YeastKayak",
  "name": "YeastKayak",
  "category": "QR",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.70 13.16 L 14.73 14.53 L 13.90 21.59 L 10.44 15.38 L 3.47 16.77 L 8.30 11.56 L 4.83 5.36 L 11.28 8.35 L 16.10 3.13 L 15.25 10.18 Z"
      }
    ]
  ]
};

export const YeastKayak = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.70 13.16 L 14.73 14.53 L 13.90 21.59 L 10.44 15.38 L 3.47 16.77 L 8.30 11.56 L 4.83 5.36 L 11.28 8.35 L 16.10 3.13 L 15.25 10.18 Z" />
      {children}
    </svg>
  );
});

export default YeastKayak;
