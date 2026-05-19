import React from 'react';

export const iconData = {
  "id": "OmbraMemento",
  "name": "OmbraMemento",
  "category": "GP",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.19 4.02 C 5.49 13.89, 8.35 4.69, 18.12 15.42"
      }
    ],
    [
      "path",
      {
        "d": "M 4.51 6.95 C 4.94 4.06, 15.02 17.34, 16.10 21.92"
      }
    ],
    [
      "path",
      {
        "d": "M 4.04 3.62 C 5.10 12.56, 4.49 14.77, 15.11 19.75"
      }
    ]
  ]
};

export const OmbraMemento = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.19 4.02 C 5.49 13.89, 8.35 4.69, 18.12 15.42" />
      <path d="M 4.51 6.95 C 4.94 4.06, 15.02 17.34, 16.10 21.92" />
      <path d="M 4.04 3.62 C 5.10 12.56, 4.49 14.77, 15.11 19.75" />
      {children}
    </svg>
  );
});

export default OmbraMemento;
