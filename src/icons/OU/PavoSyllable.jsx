import React from 'react';

export const iconData = {
  "id": "PavoSyllable",
  "name": "PavoSyllable",
  "category": "OU",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.34 11.43 L 15.34 11.43"
      }
    ],
    [
      "path",
      {
        "d": "M 12.82 11.71 L 10.82 15.17"
      }
    ],
    [
      "path",
      {
        "d": "M 11.84 12.86 L 9.84 9.39"
      }
    ]
  ]
};

export const PavoSyllable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.34 11.43 L 15.34 11.43" />
      <path d="M 12.82 11.71 L 10.82 15.17" />
      <path d="M 11.84 12.86 L 9.84 9.39" />
      {children}
    </svg>
  );
});

export default PavoSyllable;
