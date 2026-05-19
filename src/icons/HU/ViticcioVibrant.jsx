import React from 'react';

export const iconData = {
  "id": "ViticcioVibrant",
  "name": "ViticcioVibrant",
  "category": "HU",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.03 18.63 L 7.25 18.83 L 4.03 9.59 L 11.83 3.68 L 19.86 9.27 Z"
      }
    ]
  ]
};

export const ViticcioVibrant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.03 18.63 L 7.25 18.83 L 4.03 9.59 L 11.83 3.68 L 19.86 9.27 Z" />
      {children}
    </svg>
  );
});

export default ViticcioVibrant;
