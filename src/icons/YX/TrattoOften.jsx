import React from 'react';

export const iconData = {
  "id": "TrattoOften",
  "name": "TrattoOften",
  "category": "YX",
  "nodes": [
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "6.00",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "10.00",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "14.00",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "18.00",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "6.00",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "10.00",
        "r": "0.38"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "14.00",
        "r": "0.47"
      }
    ],
    [
      "circle",
      {
        "cx": "10.00",
        "cy": "18.00",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "6.00",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "10.00",
        "r": "0.33"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "14.00",
        "r": "0.42"
      }
    ],
    [
      "circle",
      {
        "cx": "14.00",
        "cy": "18.00",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "6.00",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "10.00",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "14.00",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "18.00",
        "cy": "18.00",
        "r": "0.97"
      }
    ]
  ]
};

export const TrattoOften = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="6.00" cy="6.00" r="0.81" />
      <circle cx="6.00" cy="10.00" r="0.63" />
      <circle cx="6.00" cy="14.00" r="0.70" />
      <circle cx="6.00" cy="18.00" r="0.66" />
      <circle cx="10.00" cy="6.00" r="0.68" />
      <circle cx="10.00" cy="10.00" r="0.38" />
      <circle cx="10.00" cy="14.00" r="0.47" />
      <circle cx="10.00" cy="18.00" r="0.77" />
      <circle cx="14.00" cy="6.00" r="1.06" />
      <circle cx="14.00" cy="10.00" r="0.33" />
      <circle cx="14.00" cy="14.00" r="0.42" />
      <circle cx="14.00" cy="18.00" r="0.85" />
      <circle cx="18.00" cy="6.00" r="0.87" />
      <circle cx="18.00" cy="10.00" r="0.57" />
      <circle cx="18.00" cy="14.00" r="0.77" />
      <circle cx="18.00" cy="18.00" r="0.97" />
      {children}
    </svg>
  );
});

export default TrattoOften;
