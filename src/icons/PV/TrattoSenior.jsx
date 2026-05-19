import React from 'react';

export const iconData = {
  "id": "TrattoSenior",
  "name": "TrattoSenior",
  "category": "PV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.88 15.23 L 4.41 7.66 L 10.66 3.36 L 17.92 5.56 L 20.72 12.61 L 16.96 19.20 L 9.46 20.37 Z"
      }
    ]
  ]
};

export const TrattoSenior = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.88 15.23 L 4.41 7.66 L 10.66 3.36 L 17.92 5.56 L 20.72 12.61 L 16.96 19.20 L 9.46 20.37 Z" />
      {children}
    </svg>
  );
});

export default TrattoSenior;
