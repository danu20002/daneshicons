import React from 'react';

export const iconData = {
  "id": "TeleoLiability",
  "name": "TeleoLiability",
  "category": "TO",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.61 3.84 L 18.91 7.37 L 20.16 13.61 L 16.63 18.91 L 10.39 20.16 L 5.09 16.63 L 3.84 10.39 L 7.37 5.09 Z"
      }
    ]
  ]
};

export const TeleoLiability = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.61 3.84 L 18.91 7.37 L 20.16 13.61 L 16.63 18.91 L 10.39 20.16 L 5.09 16.63 L 3.84 10.39 L 7.37 5.09 Z" />
      {children}
    </svg>
  );
});

export default TeleoLiability;
