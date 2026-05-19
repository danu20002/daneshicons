import React from 'react';

export const iconData = {
  "id": "VicinoQuintet",
  "name": "VicinoQuintet",
  "category": "TZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.90 13.41 20.00 12.44 Q 16.58 15.44 13.16 18.44 Q 8.57 17.33 3.97 16.23 Q 4.89 15.31 5.80 14.38 Z"
      }
    ]
  ]
};

export const VicinoQuintet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.90 13.41 20.00 12.44 Q 16.58 15.44 13.16 18.44 Q 8.57 17.33 3.97 16.23 Q 4.89 15.31 5.80 14.38 Z" />
      {children}
    </svg>
  );
});

export default VicinoQuintet;
