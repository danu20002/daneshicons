import React from 'react';

export const iconData = {
  "id": "TrattoFlank",
  "name": "TrattoFlank",
  "category": "KC",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.47 20.68 L 8.45 13.50 L 3.32 8.47 L 10.50 8.45 L 15.53 3.32 L 15.55 10.50 L 20.68 15.53 L 13.50 15.55 Z"
      }
    ]
  ]
};

export const TrattoFlank = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.47 20.68 L 8.45 13.50 L 3.32 8.47 L 10.50 8.45 L 15.53 3.32 L 15.55 10.50 L 20.68 15.53 L 13.50 15.55 Z" />
      {children}
    </svg>
  );
});

export default TrattoFlank;
