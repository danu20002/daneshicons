import React from 'react';

export const iconData = {
  "id": "KleptoDish",
  "name": "KleptoDish",
  "category": "QH",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.07 19.64 L 11.32 18.93"
      }
    ],
    [
      "path",
      {
        "d": "M 5.58 10.15 L 7.45 21.75"
      }
    ],
    [
      "path",
      {
        "d": "M 9.44 21.64 L 7.21 13.50 L 10.70 7.81"
      }
    ]
  ]
};

export const KleptoDish = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.07 19.64 L 11.32 18.93" />
      <path d="M 5.58 10.15 L 7.45 21.75" />
      <path d="M 9.44 21.64 L 7.21 13.50 L 10.70 7.81" />
      {children}
    </svg>
  );
});

export default KleptoDish;
