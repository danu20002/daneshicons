import React from 'react';

export const iconData = {
  "id": "PurpuraHamper",
  "name": "PurpuraHamper",
  "category": "EW",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.90 21.53 L 2.47 9.90 L 14.10 2.47 L 21.53 14.10 Z"
      }
    ]
  ]
};

export const PurpuraHamper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.90 21.53 L 2.47 9.90 L 14.10 2.47 L 21.53 14.10 Z" />
      {children}
    </svg>
  );
});

export default PurpuraHamper;
