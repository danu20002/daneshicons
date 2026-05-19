import React from 'react';

export const iconData = {
  "id": "IonoRelief",
  "name": "IonoRelief",
  "category": "XX",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.28 6.27 L 19.39 16.20 L 10.29 20.33 L 3.55 12.95 L 8.49 4.26 Z"
      }
    ]
  ]
};

export const IonoRelief = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.28 6.27 L 19.39 16.20 L 10.29 20.33 L 3.55 12.95 L 8.49 4.26 Z" />
      {children}
    </svg>
  );
});

export default IonoRelief;
