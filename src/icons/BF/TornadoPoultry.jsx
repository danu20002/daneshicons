import React from 'react';

export const iconData = {
  "id": "TornadoPoultry",
  "name": "TornadoPoultry",
  "category": "BF",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.13 4.76 L 15.25 4.47 L 19.92 9.84 L 18.62 16.84 L 12.34 20.20 L 5.80 17.38 L 3.93 10.51 Z"
      }
    ]
  ]
};

export const TornadoPoultry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.13 4.76 L 15.25 4.47 L 19.92 9.84 L 18.62 16.84 L 12.34 20.20 L 5.80 17.38 L 3.93 10.51 Z" />
      {children}
    </svg>
  );
});

export default TornadoPoultry;
