import React from 'react';

export const iconData = {
  "id": "TridenteFiction",
  "name": "TridenteFiction",
  "category": "X",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.94 4.58 L 11.42 8.46 L 15.39 3.05 L 14.77 9.73 L 21.45 10.46 L 15.35 13.27 L 18.06 19.42 L 12.58 15.54 L 8.61 20.95 L 9.23 14.27 L 2.55 13.54 L 8.65 10.73 Z"
      }
    ]
  ]
};

export const TridenteFiction = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.94 4.58 L 11.42 8.46 L 15.39 3.05 L 14.77 9.73 L 21.45 10.46 L 15.35 13.27 L 18.06 19.42 L 12.58 15.54 L 8.61 20.95 L 9.23 14.27 L 2.55 13.54 L 8.65 10.73 Z" />
      {children}
    </svg>
  );
});

export default TridenteFiction;
