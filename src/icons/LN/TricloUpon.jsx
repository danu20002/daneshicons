import React from 'react';

export const iconData = {
  "id": "TricloUpon",
  "name": "TricloUpon",
  "category": "LN",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.34 21.60 L 3.28 16.25 L 5.27 5.02 L 16.56 3.44 L 21.55 13.69 Z"
      }
    ]
  ]
};

export const TricloUpon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.34 21.60 L 3.28 16.25 L 5.27 5.02 L 16.56 3.44 L 21.55 13.69 Z" />
      {children}
    </svg>
  );
});

export default TricloUpon;
