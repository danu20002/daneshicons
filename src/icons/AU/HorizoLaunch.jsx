import React from 'react';

export const iconData = {
  "id": "HorizoLaunch",
  "name": "HorizoLaunch",
  "category": "AU",
  "nodes": [
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "5.60",
        "r": "0.39"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "8.80",
        "r": "0.42"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "12.00",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "15.20",
        "r": "0.35"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "18.40",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "5.60",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "8.80",
        "r": "1.04"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "12.00",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "15.20",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "18.40",
        "r": "0.32"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "5.60",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "8.80",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "12.00",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "15.20",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "18.40",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "5.60",
        "r": "0.35"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "8.80",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "12.00",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "15.20",
        "r": "0.40"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "18.40",
        "r": "0.36"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "5.60",
        "r": "0.47"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "8.80",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "12.00",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "15.20",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "18.40",
        "r": "0.34"
      }
    ]
  ]
};

export const HorizoLaunch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.60" cy="5.60" r="0.39" />
      <circle cx="5.60" cy="8.80" r="0.42" />
      <circle cx="5.60" cy="12.00" r="0.55" />
      <circle cx="5.60" cy="15.20" r="0.35" />
      <circle cx="5.60" cy="18.40" r="0.72" />
      <circle cx="8.80" cy="5.60" r="1.05" />
      <circle cx="8.80" cy="8.80" r="1.04" />
      <circle cx="8.80" cy="12.00" r="1.01" />
      <circle cx="8.80" cy="15.20" r="0.87" />
      <circle cx="8.80" cy="18.40" r="0.32" />
      <circle cx="12.00" cy="5.60" r="0.97" />
      <circle cx="12.00" cy="8.80" r="0.78" />
      <circle cx="12.00" cy="12.00" r="0.96" />
      <circle cx="12.00" cy="15.20" r="0.89" />
      <circle cx="12.00" cy="18.40" r="0.70" />
      <circle cx="15.20" cy="5.60" r="0.35" />
      <circle cx="15.20" cy="8.80" r="0.86" />
      <circle cx="15.20" cy="12.00" r="0.76" />
      <circle cx="15.20" cy="15.20" r="0.40" />
      <circle cx="15.20" cy="18.40" r="0.36" />
      <circle cx="18.40" cy="5.60" r="0.47" />
      <circle cx="18.40" cy="8.80" r="0.99" />
      <circle cx="18.40" cy="12.00" r="0.66" />
      <circle cx="18.40" cy="15.20" r="0.76" />
      <circle cx="18.40" cy="18.40" r="0.34" />
      {children}
    </svg>
  );
});

export default HorizoLaunch;
