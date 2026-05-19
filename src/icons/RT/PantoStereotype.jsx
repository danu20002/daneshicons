import React from 'react';

export const iconData = {
  "id": "PantoStereotype",
  "name": "PantoStereotype",
  "category": "RT",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.71 13.71 C 11.17 9.77, 8.19 18.80, 15.77 4.78"
      }
    ],
    [
      "path",
      {
        "d": "M 3.78 7.30 Q 12.00 5.01 18.18 11.78"
      }
    ],
    [
      "path",
      {
        "d": "M 14.43 20.59 A 6.84 5.66 52 0 1 20.56 9.49"
      }
    ]
  ]
};

export const PantoStereotype = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.71 13.71 C 11.17 9.77, 8.19 18.80, 15.77 4.78" />
      <path d="M 3.78 7.30 Q 12.00 5.01 18.18 11.78" />
      <path d="M 14.43 20.59 A 6.84 5.66 52 0 1 20.56 9.49" />
      {children}
    </svg>
  );
});

export default PantoStereotype;
