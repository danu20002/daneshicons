import React from 'react';

export const iconData = {
  "id": "PigmentLurk",
  "name": "PigmentLurk",
  "category": "SB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.80 11.93 L 9.53 4.18 L 18.68 7.24 L 18.59 16.88 L 9.40 19.78 Z"
      }
    ]
  ]
};

export const PigmentLurk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.80 11.93 L 9.53 4.18 L 18.68 7.24 L 18.59 16.88 L 9.40 19.78 Z" />
      {children}
    </svg>
  );
});

export default PigmentLurk;
