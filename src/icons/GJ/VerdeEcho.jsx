import React from 'react';

export const iconData = {
  "id": "VerdeEcho",
  "name": "VerdeEcho",
  "category": "GJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.53 21.10 L 7.35 20.23 L 2.90 14.53 L 3.77 7.35 L 9.47 2.90 L 16.65 3.77 L 21.10 9.47 L 20.23 16.65 Z"
      }
    ]
  ]
};

export const VerdeEcho = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.53 21.10 L 7.35 20.23 L 2.90 14.53 L 3.77 7.35 L 9.47 2.90 L 16.65 3.77 L 21.10 9.47 L 20.23 16.65 Z" />
      {children}
    </svg>
  );
});

export default VerdeEcho;
