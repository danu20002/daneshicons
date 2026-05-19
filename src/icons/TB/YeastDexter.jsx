import React from 'react';

export const iconData = {
  "id": "YeastDexter",
  "name": "YeastDexter",
  "category": "TB",
  "nodes": [
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "5.60",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "8.80",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "12.00",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "15.20",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "18.40",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "5.60",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "8.80",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "12.00",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "15.20",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "18.40",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "5.60",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "8.80",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "12.00",
        "r": "0.91"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "15.20",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "18.40",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "5.60",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "8.80",
        "r": "0.42"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "12.00",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "15.20",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "18.40",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "5.60",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "8.80",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "12.00",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "15.20",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "18.40",
        "r": "0.82"
      }
    ]
  ]
};

export const YeastDexter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.60" cy="5.60" r="0.68" />
      <circle cx="5.60" cy="8.80" r="0.78" />
      <circle cx="5.60" cy="12.00" r="0.76" />
      <circle cx="5.60" cy="15.20" r="0.84" />
      <circle cx="5.60" cy="18.40" r="0.52" />
      <circle cx="8.80" cy="5.60" r="0.65" />
      <circle cx="8.80" cy="8.80" r="0.63" />
      <circle cx="8.80" cy="12.00" r="1.08" />
      <circle cx="8.80" cy="15.20" r="1.02" />
      <circle cx="8.80" cy="18.40" r="0.74" />
      <circle cx="12.00" cy="5.60" r="0.60" />
      <circle cx="12.00" cy="8.80" r="1.08" />
      <circle cx="12.00" cy="12.00" r="0.91" />
      <circle cx="12.00" cy="15.20" r="0.65" />
      <circle cx="12.00" cy="18.40" r="1.07" />
      <circle cx="15.20" cy="5.60" r="0.67" />
      <circle cx="15.20" cy="8.80" r="0.42" />
      <circle cx="15.20" cy="12.00" r="0.65" />
      <circle cx="15.20" cy="15.20" r="0.93" />
      <circle cx="15.20" cy="18.40" r="0.67" />
      <circle cx="18.40" cy="5.60" r="0.63" />
      <circle cx="18.40" cy="8.80" r="0.92" />
      <circle cx="18.40" cy="12.00" r="0.89" />
      <circle cx="18.40" cy="15.20" r="0.78" />
      <circle cx="18.40" cy="18.40" r="0.82" />
      {children}
    </svg>
  );
});

export default YeastDexter;
