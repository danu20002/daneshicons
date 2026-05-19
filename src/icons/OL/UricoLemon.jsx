import React from 'react';

export const iconData = {
  "id": "UricoLemon",
  "name": "UricoLemon",
  "category": "OL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.43 9.44 L 7.08 4.53 L 13.03 3.11 L 18.50 5.85 L 20.93 11.47 L 19.18 17.34 L 14.07 20.70 L 7.99 20.00 L 3.79 15.55 Z"
      }
    ]
  ]
};

export const UricoLemon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.43 9.44 L 7.08 4.53 L 13.03 3.11 L 18.50 5.85 L 20.93 11.47 L 19.18 17.34 L 14.07 20.70 L 7.99 20.00 L 3.79 15.55 Z" />
      {children}
    </svg>
  );
});

export default UricoLemon;
