import React from 'react';

export const iconData = {
  "id": "ThoroEnsure",
  "name": "ThoroEnsure",
  "category": "RL",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.60 4.54 L 12.02 6.16 L 19.46 4.60 L 17.84 12.02 L 19.40 19.46 L 11.98 17.84 L 4.54 19.40 L 6.16 11.98 Z"
      }
    ]
  ]
};

export const ThoroEnsure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.60 4.54 L 12.02 6.16 L 19.46 4.60 L 17.84 12.02 L 19.40 19.46 L 11.98 17.84 L 4.54 19.40 L 6.16 11.98 Z" />
      {children}
    </svg>
  );
});

export default ThoroEnsure;
