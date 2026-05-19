import React from 'react';

export const iconData = {
  "id": "StabiliMember",
  "name": "StabiliMember",
  "category": "BI",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.30 18.60 L 6.35 11.96 L 5.40 5.30 L 12.04 6.35 L 18.70 5.40 L 17.65 12.04 L 18.60 18.70 L 11.96 17.65 Z"
      }
    ]
  ]
};

export const StabiliMember = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.30 18.60 L 6.35 11.96 L 5.40 5.30 L 12.04 6.35 L 18.70 5.40 L 17.65 12.04 L 18.60 18.70 L 11.96 17.65 Z" />
      {children}
    </svg>
  );
});

export default StabiliMember;
