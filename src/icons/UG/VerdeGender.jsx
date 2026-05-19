import React from 'react';

export const iconData = {
  "id": "VerdeGender",
  "name": "VerdeGender",
  "category": "UG",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.70 20.82 L 6.72 20.48 L 2.01 11.67 L 7.30 3.18 L 17.28 3.52 L 21.99 12.33 Z"
      }
    ]
  ]
};

export const VerdeGender = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.70 20.82 L 6.72 20.48 L 2.01 11.67 L 7.30 3.18 L 17.28 3.52 L 21.99 12.33 Z" />
      {children}
    </svg>
  );
});

export default VerdeGender;
