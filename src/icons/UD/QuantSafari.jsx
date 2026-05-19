import React from 'react';

export const iconData = {
  "id": "QuantSafari",
  "name": "QuantSafari",
  "category": "UD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.23 5.69 L 19.77 5.69 L 19.77 18.31 L 4.23 18.31 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.23 5.69 L 7.44 2.47 L 22.99 2.47 L 19.77 5.69"
      }
    ],
    [
      "path",
      {
        "d": "M 19.77 5.69 L 22.99 2.47 L 22.99 15.10 L 19.77 18.31"
      }
    ]
  ]
};

export const QuantSafari = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.23 5.69 L 19.77 5.69 L 19.77 18.31 L 4.23 18.31 Z" />
      <path d="M 4.23 5.69 L 7.44 2.47 L 22.99 2.47 L 19.77 5.69" />
      <path d="M 19.77 5.69 L 22.99 2.47 L 22.99 15.10 L 19.77 18.31" />
      {children}
    </svg>
  );
});

export default QuantSafari;
