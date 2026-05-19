import React from 'react';

export const iconData = {
  "id": "TurcheseCrank",
  "name": "TurcheseCrank",
  "category": "ZB",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.07 17.23 Q 14.31 17.69 21.22 16.75"
      }
    ],
    [
      "path",
      {
        "d": "M 6.23 5.53 C 7.95 3.43, 5.70 18.12, 3.14 11.54"
      }
    ],
    [
      "path",
      {
        "d": "M 4.78 15.44 L 18.05 5.99"
      }
    ]
  ]
};

export const TurcheseCrank = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.07 17.23 Q 14.31 17.69 21.22 16.75" />
      <path d="M 6.23 5.53 C 7.95 3.43, 5.70 18.12, 3.14 11.54" />
      <path d="M 4.78 15.44 L 18.05 5.99" />
      {children}
    </svg>
  );
});

export default TurcheseCrank;
