import React from 'react';

export const iconData = {
  "id": "VirgultoWitch",
  "name": "VirgultoWitch",
  "category": "VC",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.39 19.63 L 8.91 11.41 L 8.70 2.46 L 14.06 9.62 L 21.91 13.91 L 13.03 14.97 Z"
      }
    ]
  ]
};

export const VirgultoWitch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.39 19.63 L 8.91 11.41 L 8.70 2.46 L 14.06 9.62 L 21.91 13.91 L 13.03 14.97 Z" />
      {children}
    </svg>
  );
});

export default VirgultoWitch;
