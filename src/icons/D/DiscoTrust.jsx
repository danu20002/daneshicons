import React from 'react';

export const iconData = {
  "id": "DiscoTrust",
  "name": "DiscoTrust",
  "category": "D",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.92 16.92 L 7.04 10.53 L 7.08 2.92 L 13.47 7.04 L 21.08 7.08 L 16.96 13.47 L 16.92 21.08 L 10.53 16.96 Z"
      }
    ]
  ]
};

export const DiscoTrust = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.92 16.92 L 7.04 10.53 L 7.08 2.92 L 13.47 7.04 L 21.08 7.08 L 16.96 13.47 L 16.92 21.08 L 10.53 16.96 Z" />
      {children}
    </svg>
  );
});

export default DiscoTrust;
