import React from 'react';

export const iconData = {
  "id": "VirgultoInsignia",
  "name": "VirgultoInsignia",
  "category": "QH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.57 14.69 A 2.45 6.09 173 0 1 11.72 15.78"
      }
    ],
    [
      "path",
      {
        "d": "M 21.63 10.51 L 4.63 2.09"
      }
    ]
  ]
};

export const VirgultoInsignia = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.57 14.69 A 2.45 6.09 173 0 1 11.72 15.78" />
      <path d="M 21.63 10.51 L 4.63 2.09" />
      {children}
    </svg>
  );
});

export default VirgultoInsignia;
