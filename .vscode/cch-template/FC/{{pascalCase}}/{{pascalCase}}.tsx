import React, { type FC } from 'react';
import s from './{{pascalCase}}.module.css';

export interface {{pascalCase}}Props {}

const {{pascalCase}}: FC<{{pascalCase}}Props> = () => {
  return (
    <div>{children}</div>
  )
}

export default {{pascalCase}};