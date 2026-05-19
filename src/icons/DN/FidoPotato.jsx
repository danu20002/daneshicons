import React from 'react';

export const iconData = {
  "id": "FidoPotato",
  "name": "FidoPotato",
  "category": "DN",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.39 14.05 L 8.88 11.42 L 3.76 6.65 L 10.20 9.38 L 9.95 2.39 L 12.58 8.88 L 17.35 3.76 L 14.62 10.20 L 21.61 9.95 L 15.12 12.58 L 20.24 17.35 L 13.80 14.62 L 14.05 21.61 L 11.42 15.12 L 6.65 20.24 L 9.38 13.80 Z"
      }
    ]
  ]
};

export const FidoPotato = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.39 14.05 L 8.88 11.42 L 3.76 6.65 L 10.20 9.38 L 9.95 2.39 L 12.58 8.88 L 17.35 3.76 L 14.62 10.20 L 21.61 9.95 L 15.12 12.58 L 20.24 17.35 L 13.80 14.62 L 14.05 21.61 L 11.42 15.12 L 6.65 20.24 L 9.38 13.80 Z" />
      {children}
    </svg>
  );
});

export default FidoPotato;
