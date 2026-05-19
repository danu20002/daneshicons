import React from 'react';

export const iconData = {
  "id": "VirgultoParty",
  "name": "VirgultoParty",
  "category": "GI",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.18 2.97 L 21.03 11.18 L 12.82 21.03 L 2.97 12.82 Z"
      }
    ]
  ]
};

export const VirgultoParty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.18 2.97 L 21.03 11.18 L 12.82 21.03 L 2.97 12.82 Z" />
      {children}
    </svg>
  );
});

export default VirgultoParty;
