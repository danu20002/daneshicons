import React from 'react';

export const iconData = {
  "id": "VulnereEnergy",
  "name": "VulnereEnergy",
  "category": "VS",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.40 3.55 L 19.67 7.72 L 20.45 14.40 L 16.28 19.67 L 9.60 20.45 L 4.33 16.28 L 3.55 9.60 L 7.72 4.33 Z"
      }
    ]
  ]
};

export const VulnereEnergy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.40 3.55 L 19.67 7.72 L 20.45 14.40 L 16.28 19.67 L 9.60 20.45 L 4.33 16.28 L 3.55 9.60 L 7.72 4.33 Z" />
      {children}
    </svg>
  );
});

export default VulnereEnergy;
