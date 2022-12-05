import React from 'react';
import s from './badge.module.css';

const availableColors = [
    { color: '#c42f06', dark: true },
    { color: '#812103', dark: true },
    { color: '#393A4AFF', dark: true },
    { color: '#FF7F50', dark: false },
    { color: '#53556CFF', dark: true },
    { color: '#e19e87', dark: false },
    { color: '#FFC150', dark: false },
    { color: '#A6741A', dark: true },
    { color: '#86D8B3', dark: false },
    { color: '#871551', dark: true }
];

function Badge({ title, number = 0, bound = 20 }) {

    const index = number % availableColors.length;
    const color = availableColors[index].dark ? '#f4e2db' : 'black';
    const background = availableColors[index].color;

    const title_string = String(title);
    return (
        <div className={s.main} style={{ color: color, backgroundColor: background, minWidth: (bound * 0.8)+'rem' }} title={title}>
            { title && (title_string.length > bound ? title_string.substring(0, bound -1) + '...' : title_string) }
        </div>
    );
}

export default Badge;