import React from 'react';
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to combine class names
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface AvatarProps {
    src?: string;
    name?: string;
    size?: 'sm' | 'md' | 'lg';
    isBordered?: boolean;
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
    className?: string;
}

const Avatar: React.FC<AvatarProps> = ({
    src,
    name,
    size = 'md',
    isBordered = false,
    color = 'default',
    radius = 'full',
    className,
}) => {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
    };

    const colorClasses = {
        default: 'bg-gray-200',
        primary: 'bg-primary-500',
        secondary: 'bg-secondary-500',
        success: 'bg-success-500',
        warning: 'bg-warning-500',
        danger: 'bg-error-500',
    };

    const radiusClasses = {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
    };

    const getInitials = (name?: string) => {
        if (!name) return '';
        const nameParts = name.split(' ');
        const initials = nameParts.map(part => part[0]).join('');
        return initials.toUpperCase();
    };

    return (
        <div
            className={cn(
                'inline-block overflow-hidden',
                sizeClasses[size],
                colorClasses[color],
                radiusClasses[radius],
                { 'ring-2 ring-offset-2 ring-current': isBordered },
                className
            )}
        >
            {src ? (
                <img src={src} alt={name} className="w-full h-full object-cover m-0" />
            ) : (
                <div className="flex items-center justify-center w-full h-full text-black">
                    {getInitials(name)}
                </div>
            )}
        </div>
    );
};

export { Avatar };