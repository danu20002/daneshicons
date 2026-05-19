import React from 'react';

export const iconData = {
  "id": "TrattoFlux",
  "name": "TrattoFlux",
  "category": "NA",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.55 11.85 L 17.41 14.50 L 18.08 19.37 L 13.42 17.79 L 10.02 21.35 L 8.36 16.72 L 3.46 16.28 L 6.04 12.10 L 3.33 7.99 L 8.21 7.40 L 9.72 2.72 L 13.23 6.17 L 17.84 4.43 L 17.33 9.33 Z"
      }
    ]
  ]
};

export const TrattoFlux = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.55 11.85 L 17.41 14.50 L 18.08 19.37 L 13.42 17.79 L 10.02 21.35 L 8.36 16.72 L 3.46 16.28 L 6.04 12.10 L 3.33 7.99 L 8.21 7.40 L 9.72 2.72 L 13.23 6.17 L 17.84 4.43 L 17.33 9.33 Z" />
      {children}
    </svg>
  );
});

export default TrattoFlux;
