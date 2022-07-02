import React from 'react'
import checkIcon from '../../../assets/svg/check.svg';
import errorIcon from '../../../assets/svg/error.svg';
import infoIcon from '../../../assets/svg/info.svg';
import warningIcon from '../../../assets/svg/warning.svg';

export const TOAST_PROPERTIES = [
  {
    id: Math.floor((Math.random() * 101) + 1),
    title: 'success',
    backgroundColor: '#5cb85c',
    icon: checkIcon
  },
  {
    id: Math.floor((Math.random() * 101) + 1),
    title: 'danger',
    backgroundColor: '#d9534f',
    icon: errorIcon
  },
  {
    id: Math.floor((Math.random() * 101) + 1),
    title: 'info',
    backgroundColor: '#5bc0de',
    icon: infoIcon
  },
  {
    id: Math.floor((Math.random() * 101) + 1),
    title: 'warning',
    backgroundColor: '#f0ad4e',
    icon: warningIcon
  }
];