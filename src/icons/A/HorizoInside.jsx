import React from 'react';

export const iconData = {
  "id": "HorizoInside",
  "name": "HorizoInside",
  "category": "A",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.46 6.30 L 12.38 3.34 L 19.01 6.89 L 20.36 14.30 L 15.42 19.97 L 7.90 19.64 L 3.47 13.56 Z"
      }
    ]
  ]
};

export const HorizoInside = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.46 6.30 L 12.38 3.34 L 19.01 6.89 L 20.36 14.30 L 15.42 19.97 L 7.90 19.64 L 3.47 13.56 Z" />
      {children}
    </svg>
  );
});

export default HorizoInside;
