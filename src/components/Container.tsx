import React, {HTMLAttributes} from 'react';
import clsx, {ClassValue} from 'clsx';

type ModifiedHTMLAttributes<T> = Omit<HTMLAttributes<T>, 'className'> & {
    className?: ClassValue;
};

interface ContainerProps extends ModifiedHTMLAttributes<HTMLDivElement> {
}

export function Container({className, ...props}: ContainerProps) {
    return (
        <div
            className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
            {...props}
        />
    );
}
