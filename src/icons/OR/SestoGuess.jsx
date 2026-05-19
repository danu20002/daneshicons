import React from 'react';

export const iconData = {
  "id": "SestoGuess",
  "name": "SestoGuess",
  "category": "OR",
  "nodes": [
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "5.60",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "8.80",
        "r": "0.35"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "12.00",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "15.20",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "18.40",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "5.60",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "8.80",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "12.00",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "15.20",
        "r": "1.03"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "18.40",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "5.60",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "8.80",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "12.00",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "15.20",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "12.00",
        "cy": "18.40",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "5.60",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "8.80",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "12.00",
        "r": "0.48"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "15.20",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "15.20",
        "cy": "18.40",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "5.60",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "8.80",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "12.00",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "15.20",
        "r": "0.48"
      }
    ],
    [
      "circle",
      {
        "cx": "18.40",
        "cy": "18.40",
        "r": "0.48"
      }
    ]
  ]
};

export const SestoGuess = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <circle cx="5.60" cy="5.60" r="0.65" />
      <circle cx="5.60" cy="8.80" r="0.35" />
      <circle cx="5.60" cy="12.00" r="0.60" />
      <circle cx="5.60" cy="15.20" r="1.08" />
      <circle cx="5.60" cy="18.40" r="1.07" />
      <circle cx="8.80" cy="5.60" r="1.08" />
      <circle cx="8.80" cy="8.80" r="0.95" />
      <circle cx="8.80" cy="12.00" r="0.59" />
      <circle cx="8.80" cy="15.20" r="1.03" />
      <circle cx="8.80" cy="18.40" r="0.73" />
      <circle cx="12.00" cy="5.60" r="0.62" />
      <circle cx="12.00" cy="8.80" r="0.72" />
      <circle cx="12.00" cy="12.00" r="0.81" />
      <circle cx="12.00" cy="15.20" r="0.76" />
      <circle cx="12.00" cy="18.40" r="0.69" />
      <circle cx="15.20" cy="5.60" r="0.86" />
      <circle cx="15.20" cy="8.80" r="0.80" />
      <circle cx="15.20" cy="12.00" r="0.48" />
      <circle cx="15.20" cy="15.20" r="1.07" />
      <circle cx="15.20" cy="18.40" r="0.92" />
      <circle cx="18.40" cy="5.60" r="0.99" />
      <circle cx="18.40" cy="8.80" r="0.73" />
      <circle cx="18.40" cy="12.00" r="0.74" />
      <circle cx="18.40" cy="15.20" r="0.48" />
      <circle cx="18.40" cy="18.40" r="0.48" />
      {children}
    </svg>
  );
});

export default SestoGuess;
