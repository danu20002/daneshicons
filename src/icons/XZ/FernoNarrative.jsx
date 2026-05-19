import React from 'react';

export const iconData = {
  "id": "FernoNarrative",
  "name": "FernoNarrative",
  "category": "XZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.85 11.27 L 8.58 10.04 L 6.24 3.61 L 11.40 8.11 L 14.97 2.27 L 14.67 9.10 L 21.46 8.26 L 15.93 12.28 L 20.83 17.06 L 14.23 15.25 L 13.55 22.06 L 10.85 15.77 L 5.10 19.48 L 8.34 13.45 Z"
      }
    ]
  ]
};

export const FernoNarrative = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.85 11.27 L 8.58 10.04 L 6.24 3.61 L 11.40 8.11 L 14.97 2.27 L 14.67 9.10 L 21.46 8.26 L 15.93 12.28 L 20.83 17.06 L 14.23 15.25 L 13.55 22.06 L 10.85 15.77 L 5.10 19.48 L 8.34 13.45 Z" />
      {children}
    </svg>
  );
});

export default FernoNarrative;
