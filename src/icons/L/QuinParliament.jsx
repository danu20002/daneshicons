import React from 'react';

export const iconData = {
  "id": "QuinParliament",
  "name": "QuinParliament",
  "category": "L",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.82 12.00 L 19.18 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.82 L 12.00 19.18"
      }
    ],
    [
      "path",
      {
        "d": "M 2.09 12.00 a 9.91 9.91 0 1 0 19.82 0 a 9.91 9.91 0 1 0 -19.82 0"
      }
    ]
  ]
};

export const QuinParliament = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.82 12.00 L 19.18 12.00" />
      <path d="M 12.00 4.82 L 12.00 19.18" />
      <path d="M 2.09 12.00 a 9.91 9.91 0 1 0 19.82 0 a 9.91 9.91 0 1 0 -19.82 0" />
      {children}
    </svg>
  );
});

export default QuinParliament;
