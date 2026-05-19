import React from 'react';

export const iconData = {
  "id": "TernoFabric",
  "name": "TernoFabric",
  "category": "BY",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.03 9.06 L 18.56 17.49 L 10.53 20.42 L 3.97 14.94 L 5.44 6.51 L 13.47 3.58 Z"
      }
    ]
  ]
};

export const TernoFabric = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.03 9.06 L 18.56 17.49 L 10.53 20.42 L 3.97 14.94 L 5.44 6.51 L 13.47 3.58 Z" />
      {children}
    </svg>
  );
});

export default TernoFabric;
