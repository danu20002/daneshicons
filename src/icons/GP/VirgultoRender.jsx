import React from 'react';

export const iconData = {
  "id": "VirgultoRender",
  "name": "VirgultoRender",
  "category": "GP",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.00 5.49 C 4.78 17.75, 16.88 9.82, 21.77 19.33"
      }
    ],
    [
      "path",
      {
        "d": "M 8.16 6.30 C 12.96 14.91, 10.00 16.06, 21.85 21.98"
      }
    ],
    [
      "path",
      {
        "d": "M 4.49 5.99 C 17.77 9.10, 9.07 9.72, 19.14 18.37"
      }
    ]
  ]
};

export const VirgultoRender = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.00 5.49 C 4.78 17.75, 16.88 9.82, 21.77 19.33" />
      <path d="M 8.16 6.30 C 12.96 14.91, 10.00 16.06, 21.85 21.98" />
      <path d="M 4.49 5.99 C 17.77 9.10, 9.07 9.72, 19.14 18.37" />
      {children}
    </svg>
  );
});

export default VirgultoRender;
