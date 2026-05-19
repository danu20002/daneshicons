import React from 'react';

export const iconData = {
  "id": "EcoCross",
  "name": "EcoCross",
  "category": "VV",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.30 13.04 L 13.65 15.77 L 6.45 19.54 L 7.91 11.54 L 8.25 3.43 L 14.44 8.68 Z"
      }
    ]
  ]
};

export const EcoCross = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.30 13.04 L 13.65 15.77 L 6.45 19.54 L 7.91 11.54 L 8.25 3.43 L 14.44 8.68 Z" />
      {children}
    </svg>
  );
});

export default EcoCross;
