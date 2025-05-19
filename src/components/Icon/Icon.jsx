import { lazy, Suspense } from 'react';

const icons = import.meta.glob('../../../assets/icons/*.svg?react');
console.log(Object.keys(icons));

function Icon({ name, className }) {
  const LazyIcon = lazy(icons[`../../assets/icons/${name}.svg?react`]);

  if (!icons[name]) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return (
    <Suspense fallback={<div className={`inline-block ${className}`} />}>
      <LazyIcon className={className} />
    </Suspense>
  );
}

export default Icon;
