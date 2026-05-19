import React from 'react';

export const iconData = {
  "id": "VistaDisplay",
  "name": "VistaDisplay",
  "category": "TE",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.41 9.91 L 14.41 9.91"
      }
    ],
    [
      "path",
      {
        "d": "M 14.61 11.66 L 12.61 15.13"
      }
    ],
    [
      "path",
      {
        "d": "M 10.99 14.43 L 8.99 10.96"
      }
    ]
  ]
};

export const VistaDisplay = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.41 9.91 L 14.41 9.91" />
      <path d="M 14.61 11.66 L 12.61 15.13" />
      <path d="M 10.99 14.43 L 8.99 10.96" />
      {children}
    </svg>
  );
});

export default VistaDisplay;
