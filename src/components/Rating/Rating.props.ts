import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /** Будет ли от наведения меняться значение. */
  isEditable?: boolean;
  /** Указываем значение рейтинга */
  rating: number;
  /** Передаём функцию для изменения состояние значения */
  setRating?: (rating: number) => void;
  /** Обработчик  ошибок */
  error?: FieldError;
}
