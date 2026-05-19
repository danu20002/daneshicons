import React from 'react';

export const iconData = {
  "id": "TridenteLease",
  "name": "TridenteLease",
  "category": "PE",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.11 11.44 L 17.03 19.61 L 7.93 20.16 L 2.89 12.56 L 6.97 4.39 L 16.07 3.84 Z"
      }
    ]
  ]
};

export const TridenteLease = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.11 11.44 L 17.03 19.61 L 7.93 20.16 L 2.89 12.56 L 6.97 4.39 L 16.07 3.84 Z" />
      {children}
    </svg>
  );
});

export default TridenteLease;
