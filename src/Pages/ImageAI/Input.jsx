import { twMerge } from 'tailwind-merge';

const Input = ({ isTextarea, className, ...props }) => {
  const Component = isTextarea ? 'textarea' : 'input';
  return (
    <Component
      className={twMerge(`bg-stone-600 p-2 rounded-lg`, className)}
      {...props}
    />
  );
}

export default Input;
