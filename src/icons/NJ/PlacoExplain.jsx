import React from 'react';

export const iconData = {
  "id": "PlacoExplain",
  "name": "PlacoExplain",
  "category": "NJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.88 5.65 Q 8.51 15.69 13.01 6.15"
      }
    ],
    [
      "path",
      {
        "d": "M 15.39 21.99 Q 8.10 18.88 9.00 4.10"
      }
    ],
    [
      "path",
      {
        "d": "M 6.91 20.56 L 20.71 21.87"
      }
    ]
  ]
};

export const PlacoExplain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.88 5.65 Q 8.51 15.69 13.01 6.15" />
      <path d="M 15.39 21.99 Q 8.10 18.88 9.00 4.10" />
      <path d="M 6.91 20.56 L 20.71 21.87" />
      {children}
    </svg>
  );
});

export default PlacoExplain;
