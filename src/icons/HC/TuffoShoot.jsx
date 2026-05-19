import React from 'react';

export const iconData = {
  "id": "TuffoShoot",
  "name": "TuffoShoot",
  "category": "HC",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.30 2.38 L 20.33 7.02 L 21.09 15.41 L 15.01 21.23 L 6.66 20.10 L 2.33 12.88 L 5.29 4.99 Z"
      }
    ]
  ]
};

export const TuffoShoot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.30 2.38 L 20.33 7.02 L 21.09 15.41 L 15.01 21.23 L 6.66 20.10 L 2.33 12.88 L 5.29 4.99 Z" />
      {children}
    </svg>
  );
});

export default TuffoShoot;
