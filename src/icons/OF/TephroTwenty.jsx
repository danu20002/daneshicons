import React from 'react';

export const iconData = {
  "id": "TephroTwenty",
  "name": "TephroTwenty",
  "category": "OF",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.07 19.80 L 5.51 20.01 L 2.78 22.73 L 2.33 21.27 L 3.14 22.59 L 1.00 22.85 L 1.00 21.93 L 1.76 19.22 L 1.00 21.69 L 1.00 22.76 L 3.56 23.00 L 2.64 20.67 L 4.72 18.67 L 4.79 17.35 L 1.81 18.17 L 1.00 18.89 L 1.69 19.07 L 1.00 21.74 L 1.85 22.80 L 1.00 22.64 L 3.43 20.56 L 3.98 20.35 L 1.86 20.34 L 3.67 20.21 L 1.41 21.52 L 1.00 19.41"
      }
    ]
  ]
};

export const TephroTwenty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.07 19.80 L 5.51 20.01 L 2.78 22.73 L 2.33 21.27 L 3.14 22.59 L 1.00 22.85 L 1.00 21.93 L 1.76 19.22 L 1.00 21.69 L 1.00 22.76 L 3.56 23.00 L 2.64 20.67 L 4.72 18.67 L 4.79 17.35 L 1.81 18.17 L 1.00 18.89 L 1.69 19.07 L 1.00 21.74 L 1.85 22.80 L 1.00 22.64 L 3.43 20.56 L 3.98 20.35 L 1.86 20.34 L 3.67 20.21 L 1.41 21.52 L 1.00 19.41" />
      {children}
    </svg>
  );
});

export default TephroTwenty;
