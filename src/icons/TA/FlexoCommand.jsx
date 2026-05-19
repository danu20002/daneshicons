import React from 'react';

export const iconData = {
  "id": "FlexoCommand",
  "name": "FlexoCommand",
  "category": "TA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.43 6.68 C 16.14 10.27, 4.47 9.99, 18.59 14.27"
      }
    ],
    [
      "path",
      {
        "d": "M 3.89 2.06 C 13.86 19.88, 5.46 17.12, 17.23 20.42"
      }
    ],
    [
      "path",
      {
        "d": "M 8.05 8.31 C 18.17 14.90, 5.91 11.96, 18.90 14.80"
      }
    ]
  ]
};

export const FlexoCommand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.43 6.68 C 16.14 10.27, 4.47 9.99, 18.59 14.27" />
      <path d="M 3.89 2.06 C 13.86 19.88, 5.46 17.12, 17.23 20.42" />
      <path d="M 8.05 8.31 C 18.17 14.90, 5.91 11.96, 18.90 14.80" />
      {children}
    </svg>
  );
});

export default FlexoCommand;
