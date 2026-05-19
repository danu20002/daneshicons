import React from 'react';

export const iconData = {
  "id": "LunaMargin",
  "name": "LunaMargin",
  "category": "KL",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.67 17.24 Q 18.76 9.27 9.13 18.03"
      }
    ],
    [
      "path",
      {
        "d": "M 8.28 3.78 L 15.22 19.67 L 18.75 2.46"
      }
    ],
    [
      "path",
      {
        "d": "M 2.76 15.68 Q 17.80 2.09 11.62 9.50"
      }
    ]
  ]
};

export const LunaMargin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.67 17.24 Q 18.76 9.27 9.13 18.03" />
      <path d="M 8.28 3.78 L 15.22 19.67 L 18.75 2.46" />
      <path d="M 2.76 15.68 Q 17.80 2.09 11.62 9.50" />
      {children}
    </svg>
  );
});

export default LunaMargin;
