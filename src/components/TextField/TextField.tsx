import classNames from 'classnames';
import React, { memo, useState } from 'react';

type Props = {
  name: string;
  value: string;
  onChange: (newValue: string) => void;
  label?: string;
  required?: boolean;
  isFieldValid?: (newValue: string) => boolean;
};

function getRandomDigits() {
  return Math.random().toString().slice(2);
}

export const TextField: React.FC<Props> = memo(({
  name,
  value,
  onChange,
  label = name,
  required = false,
  isFieldValid = () => true,
}) => {
  const [id] = useState(() => `${name}-${getRandomDigits()}`);
  const [touched, setTouched] = useState(false);
  const hasError = touched && required && (!value || !isFieldValid(value));

  return (
    <div className="field">
      <label className="label" htmlFor={id}>
        {label}
      </label>

      <div className="control">
        <input
          id={id}
          data-cy={`movie-${name}`}
          className={classNames('input', {
            'is-danger': hasError,
          })}
          type="text"
          placeholder={`Enter ${label}`}
          value={value}
          onChange={event => onChange(event.target.value)}
          onBlur={() => setTouched(true)}
        />
      </div>

      {hasError && (
        <p className="help is-danger">{`${label} is required`}</p>
      )}
    </div>
  );
});
