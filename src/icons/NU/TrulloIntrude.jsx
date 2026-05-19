import React from 'react';

export const iconData = {
  "id": "TrulloIntrude",
  "name": "TrulloIntrude",
  "category": "NU",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.69 21.55 L 9.09 13.74 L 1.07 12.18 L 9.04 10.35 L 6.38 2.63 L 11.94 8.61 L 17.31 2.45 L 14.91 10.26 L 22.93 11.82 L 14.96 13.65 L 17.62 21.37 L 12.06 15.39 Z"
      }
    ]
  ]
};

export const TrulloIntrude = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.69 21.55 L 9.09 13.74 L 1.07 12.18 L 9.04 10.35 L 6.38 2.63 L 11.94 8.61 L 17.31 2.45 L 14.91 10.26 L 22.93 11.82 L 14.96 13.65 L 17.62 21.37 L 12.06 15.39 Z" />
      {children}
    </svg>
  );
});

export default TrulloIntrude;
