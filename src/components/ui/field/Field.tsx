import cn from 'clsx';
import { LucideIcon } from 'lucide-react';
import { forwardRef, InputHTMLAttributes } from 'react';
import s from './Field.module.css';
import { FieldError } from 'react-hook-form';

interface IFieldProps {
  placeholder: string;
  error?: FieldError;
  Icon?: LucideIcon;
}

type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

const Field = forwardRef<HTMLInputElement, TypeInputProps>(
  ({ error, style, Icon, className, ...rest }, ref) => {
    return (
      <label className={cn(s.field, className)} style={style}>
        {Icon && (
          <div className={s.icon}>
            <Icon />
          </div>
        )}
        <input ref={ref} {...rest} className={s.input}/>
        {error && <div className={s.error}>{error.message}</div>}
      </label>
    );
  }
);

Field.displayName = 'Field';

export default Field;
