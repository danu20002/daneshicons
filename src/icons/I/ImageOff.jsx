import React from 'react';

export const iconData = {
  id: "ImageOff",
  name: "ImageOff",
  category: "I",
  nodes: [["line",{"x1":"2","x2":"22","y1":"2","y2":"22"}],["path",{"d":"M10.41 10.41a2 2 0 1 1-2.83-2.83"}],["line",{"x1":"13.5","x2":"6","y1":"13.5","y2":"21"}],["line",{"x1":"18","x2":"21","y1":"12","y2":"15"}],["path",{"d":"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"}],["path",{"d":"M21 15V5a2 2 0 0 0-2-2H9"}]]
};

export const ImageOff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <line x1="2" x2="22" y1="2" y2="22" />
      <path d="M10.41 10.41a2 2 0 1 1-2.83-2.83" />
      <line x1="13.5" x2="6" y1="13.5" y2="21" />
      <line x1="18" x2="21" y1="12" y2="15" />
      <path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" />
      <path d="M21 15V5a2 2 0 0 0-2-2H9" />
      {children}
    </svg>
  );
});

export default ImageOff;
