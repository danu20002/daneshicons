import React from 'react';

export const iconData = {
  "id": "YenCork",
  "name": "YenCork",
  "category": "WC",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.54 8.65 L 10.54 8.65"
      }
    ],
    [
      "path",
      {
        "d": "M 15.35 6.54 L 15.35 10.54"
      }
    ],
    [
      "path",
      {
        "d": "M 17.46 15.35 L 13.46 15.35"
      }
    ],
    [
      "path",
      {
        "d": "M 8.65 17.46 L 8.65 13.46"
      }
    ]
  ]
};

export const YenCork = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.54 8.65 L 10.54 8.65" />
      <path d="M 15.35 6.54 L 15.35 10.54" />
      <path d="M 17.46 15.35 L 13.46 15.35" />
      <path d="M 8.65 17.46 L 8.65 13.46" />
      {children}
    </svg>
  );
});

export default YenCork;
