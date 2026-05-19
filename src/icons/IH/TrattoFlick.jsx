import React from 'react';

export const iconData = {
  "id": "TrattoFlick",
  "name": "TrattoFlick",
  "category": "IH",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.81 5.93 L 20.04 6.66"
      }
    ],
    [
      "circle",
      {
        "cx": "3.06",
        "cy": "4.62",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "10.81",
        "cy": "5.93",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "20.04",
        "cy": "6.66",
        "r": "1.5"
      }
    ]
  ]
};

export const TrattoFlick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.81 5.93 L 20.04 6.66" />
      <circle cx="3.06" cy="4.62" r="1.5" />
      <circle cx="10.81" cy="5.93" r="1.5" />
      <circle cx="20.04" cy="6.66" r="1.5" />
      {children}
    </svg>
  );
});

export default TrattoFlick;
