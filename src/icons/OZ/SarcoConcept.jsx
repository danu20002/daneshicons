import React from 'react';

export const iconData = {
  "id": "SarcoConcept",
  "name": "SarcoConcept",
  "category": "OZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.97 12.00 a 8.03 8.03 0 1 0 16.07 0 a 8.03 8.03 0 1 0 -16.07 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.97 12.00 a 8.03 2.41012655608356 0 1 0 16.07 0 a 8.03 2.41012655608356 0 1 0 -16.07 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.97 A 2 2 0 0 0 12.00 20.03"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.97 A 2 2 0 0 1 12.00 20.03"
      }
    ]
  ]
};

export const SarcoConcept = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.97 12.00 a 8.03 8.03 0 1 0 16.07 0 a 8.03 8.03 0 1 0 -16.07 0" />
      <path d="M 3.97 12.00 a 8.03 2.41012655608356 0 1 0 16.07 0 a 8.03 2.41012655608356 0 1 0 -16.07 0" />
      <path d="M 12.00 3.97 A 2 2 0 0 0 12.00 20.03" />
      <path d="M 12.00 3.97 A 2 2 0 0 1 12.00 20.03" />
      {children}
    </svg>
  );
});

export default SarcoConcept;
