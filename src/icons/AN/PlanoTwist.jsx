import React from 'react';

export const iconData = {
  "id": "PlanoTwist",
  "name": "PlanoTwist",
  "category": "AN",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.90 4.98 L 20.50 15.45 L 11.35 21.15 L 3.10 14.21 L 7.15 4.22 Z"
      }
    ]
  ]
};

export const PlanoTwist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.90 4.98 L 20.50 15.45 L 11.35 21.15 L 3.10 14.21 L 7.15 4.22 Z" />
      {children}
    </svg>
  );
});

export default PlanoTwist;
