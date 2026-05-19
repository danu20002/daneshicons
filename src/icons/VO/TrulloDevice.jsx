import React from 'react';

export const iconData = {
  "id": "TrulloDevice",
  "name": "TrulloDevice",
  "category": "VO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.33 12.00 a 9.67 9.67 0 1 0 19.33 0 a 9.67 9.67 0 1 0 -19.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.27 6.20 a 7.73 2.3200124284252523 0 1 0 15.47 0 a 7.73 2.3200124284252523 0 1 0 -15.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.53 10.07 a 9.47 2.841423323278574 0 1 0 18.94 0 a 9.47 2.841423323278574 0 1 0 -18.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.53 13.93 a 9.47 2.841423323278574 0 1 0 18.94 0 a 9.47 2.841423323278574 0 1 0 -18.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.27 17.80 a 7.73 2.3200124284252523 0 1 0 15.47 0 a 7.73 2.3200124284252523 0 1 0 -15.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.33 A 2 2 0 0 0 12.00 21.67"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.33 A 2 2 0 0 1 12.00 21.67"
      }
    ]
  ]
};

export const TrulloDevice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.33 12.00 a 9.67 9.67 0 1 0 19.33 0 a 9.67 9.67 0 1 0 -19.33 0" />
      <path d="M 4.27 6.20 a 7.73 2.3200124284252523 0 1 0 15.47 0 a 7.73 2.3200124284252523 0 1 0 -15.47 0" />
      <path d="M 2.53 10.07 a 9.47 2.841423323278574 0 1 0 18.94 0 a 9.47 2.841423323278574 0 1 0 -18.94 0" />
      <path d="M 2.53 13.93 a 9.47 2.841423323278574 0 1 0 18.94 0 a 9.47 2.841423323278574 0 1 0 -18.94 0" />
      <path d="M 4.27 17.80 a 7.73 2.3200124284252523 0 1 0 15.47 0 a 7.73 2.3200124284252523 0 1 0 -15.47 0" />
      <path d="M 12.00 2.33 A 2 2 0 0 0 12.00 21.67" />
      <path d="M 12.00 2.33 A 2 2 0 0 1 12.00 21.67" />
      {children}
    </svg>
  );
});

export default TrulloDevice;
