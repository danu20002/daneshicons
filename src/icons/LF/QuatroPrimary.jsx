import React from 'react';

export const iconData = {
  "id": "QuatroPrimary",
  "name": "QuatroPrimary",
  "category": "LF",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.72 12.00 L 16.28 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.72 12.00 L 11.67 9.63"
      }
    ],
    [
      "path",
      {
        "d": "M 7.72 12.00 L 11.67 14.37"
      }
    ]
  ]
};

export const QuatroPrimary = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.72 12.00 L 16.28 12.00" />
      <path d="M 7.72 12.00 L 11.67 9.63" />
      <path d="M 7.72 12.00 L 11.67 14.37" />
      {children}
    </svg>
  );
});

export default QuatroPrimary;
