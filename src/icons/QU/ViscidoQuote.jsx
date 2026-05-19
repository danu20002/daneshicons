import React from 'react';

export const iconData = {
  "id": "ViscidoQuote",
  "name": "ViscidoQuote",
  "category": "QU",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.67 12.00 a 2.33 2.33 0 1 0 4.65 0 a 2.33 2.33 0 1 0 -4.65 0",
        "stroke-dasharray": "2 2"
      }
    ],
    [
      "path",
      {
        "d": "M 5.77 12.00 a 6.23 6.23 0 1 0 12.46 0 a 6.23 6.23 0 1 0 -12.46 0"
      }
    ]
  ]
};

export const ViscidoQuote = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.67 12.00 a 2.33 2.33 0 1 0 4.65 0 a 2.33 2.33 0 1 0 -4.65 0" stroke-dasharray="2 2" />
      <path d="M 5.77 12.00 a 6.23 6.23 0 1 0 12.46 0 a 6.23 6.23 0 1 0 -12.46 0" />
      {children}
    </svg>
  );
});

export default ViscidoQuote;
