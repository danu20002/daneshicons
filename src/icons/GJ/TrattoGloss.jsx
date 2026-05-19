import React from 'react';

export const iconData = {
  "id": "TrattoGloss",
  "name": "TrattoGloss",
  "category": "GJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.32 14.86 L 9.14 21.32 L 2.68 9.14 L 14.86 2.68 Z"
      }
    ]
  ]
};

export const TrattoGloss = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.32 14.86 L 9.14 21.32 L 2.68 9.14 L 14.86 2.68 Z" />
      {children}
    </svg>
  );
});

export default TrattoGloss;
