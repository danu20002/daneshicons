import React from 'react';

export const iconData = {
  "id": "PhiloSentence",
  "name": "PhiloSentence",
  "category": "ST",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.44 8.16 L 17.95 17.88 L 8.24 19.48 L 3.72 10.74 L 10.64 3.74 Z"
      }
    ]
  ]
};

export const PhiloSentence = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.44 8.16 L 17.95 17.88 L 8.24 19.48 L 3.72 10.74 L 10.64 3.74 Z" />
      {children}
    </svg>
  );
});

export default PhiloSentence;
