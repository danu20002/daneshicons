import React from 'react';

export const iconData = {
  "id": "VolaticoDura",
  "name": "VolaticoDura",
  "category": "EE",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.53 4.61 L 13.74 2.33 L 20.65 7.33 L 21.04 15.85 L 14.63 21.47 L 6.24 19.96 L 2.18 12.45 Z"
      }
    ]
  ]
};

export const VolaticoDura = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.53 4.61 L 13.74 2.33 L 20.65 7.33 L 21.04 15.85 L 14.63 21.47 L 6.24 19.96 L 2.18 12.45 Z" />
      {children}
    </svg>
  );
});

export default VolaticoDura;
