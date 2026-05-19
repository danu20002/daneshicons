import React from 'react';

export const iconData = {
  "id": "TestoMotto",
  "name": "TestoMotto",
  "category": "TY",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.19 6.89 C 15.97 20.54, 17.56 13.62, 20.33 21.29"
      }
    ],
    [
      "path",
      {
        "d": "M 19.31 14.91 A 4.69 3.51 40 0 0 9.02 9.50"
      }
    ],
    [
      "path",
      {
        "d": "M 21.36 13.46 Q 21.48 15.67 17.53 21.50"
      }
    ]
  ]
};

export const TestoMotto = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.19 6.89 C 15.97 20.54, 17.56 13.62, 20.33 21.29" />
      <path d="M 19.31 14.91 A 4.69 3.51 40 0 0 9.02 9.50" />
      <path d="M 21.36 13.46 Q 21.48 15.67 17.53 21.50" />
      {children}
    </svg>
  );
});

export default TestoMotto;
