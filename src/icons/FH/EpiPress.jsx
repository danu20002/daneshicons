import React from 'react';

export const iconData = {
  "id": "EpiPress",
  "name": "EpiPress",
  "category": "FH",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.24 7.26 L 12.24 7.26"
      }
    ],
    [
      "path",
      {
        "d": "M 17.99 11.11 L 15.99 14.58"
      }
    ],
    [
      "path",
      {
        "d": "M 9.77 17.63 L 7.77 14.17"
      }
    ]
  ]
};

export const EpiPress = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.24 7.26 L 12.24 7.26" />
      <path d="M 17.99 11.11 L 15.99 14.58" />
      <path d="M 9.77 17.63 L 7.77 14.17" />
      {children}
    </svg>
  );
});

export default EpiPress;
