import React from 'react';

export const iconData = {
  "id": "StrobiloDesk",
  "name": "StrobiloDesk",
  "category": "MH",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.40 6.46 L 9.75 8.30 L 10.55 2.71 L 13.02 7.79 L 17.54 4.40 L 15.70 9.75 L 21.29 10.55 L 16.21 13.02 L 19.60 17.54 L 14.25 15.70 L 13.45 21.29 L 10.98 16.21 L 6.46 19.60 L 8.30 14.25 L 2.71 13.45 L 7.79 10.98 Z"
      }
    ]
  ]
};

export const StrobiloDesk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.40 6.46 L 9.75 8.30 L 10.55 2.71 L 13.02 7.79 L 17.54 4.40 L 15.70 9.75 L 21.29 10.55 L 16.21 13.02 L 19.60 17.54 L 14.25 15.70 L 13.45 21.29 L 10.98 16.21 L 6.46 19.60 L 8.30 14.25 L 2.71 13.45 L 7.79 10.98 Z" />
      {children}
    </svg>
  );
});

export default StrobiloDesk;
