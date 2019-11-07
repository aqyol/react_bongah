export const API_BASE_URL = 'http://192.168.1.105:8080/api';
//  export const API_BASE_URL = '/api';
export const ACCESS_TOKEN = 'accessToken';

export const POLL_LIST_SIZE = 30;
export const MAX_CHOICES = 6;
export const POLL_QUESTION_MAX_LENGTH = 140;
export const POLL_CHOICE_MAX_LENGTH = 40;

export const NAME_MIN_LENGTH = 4;
export const NAME_MAX_LENGTH = 40;

export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 15;

export const EMAIL_MAX_LENGTH = 40;

export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 20;

export const SCOPE_MAX_LENGTH = 40;

export const REFFERENCE = 'ahmad';

const HOME_TYPE_1 = [
  {
    value: '0',
    label: 'آپارتمان',
  },
  {
    value: '1',
    label: 'پنت هاوس',
  },
  {
    value: '2',
    label: 'ویلا',
  },
  {
    value: '3',
    label: 'ویلایی',
  },
  {
    value: '4',
    label: 'برج',
  },
  {
    value: '5',
    label: 'مجتمع',
  },
  {
    value: '6',
    label: 'زمین و مستغلات',
  },
  {
    value: '7',
    label: 'کلنگی',
  },
];

const HOME_TYPE_2 = [
  {
    value: '0',
    label: 'اداری',
  },
  {
    value: '1',
    label: 'مغازه',
  },
  {
    value: '2',
    label: 'انبار',
  },
  {
    value: '3',
    label: 'تجاری',
  },
  {
    value: '4',
    label: 'زمین',
  },
  {
    value: '5',
    label: 'زمین زراعی',
  },
  {
    value: '6',
    label: 'باغ',
  },
  {
    value: '7',
    label: 'موقعیت اداری',
  },
  {
    value: '7',
    label: 'موقعیت تجاری',
  },
  {
    value: '7',
    label: 'مستغلات اداری و تجاری',
  },
];

const HOME_TYPE_3 = [
  {
    value: '0',
    label: 'کارخانه',
  },
  {
    value: '1',
    label: 'کارگاه',
  },
  {
    value: '2',
    label: 'سوله',
  },
  {
    value: '3',
    label: 'انبار',
  },
  {
    value: '4',
    label: 'خرپا',
  },
];

export const HOME_TYPE_ARRAY = [HOME_TYPE_1, HOME_TYPE_2, HOME_TYPE_3];

export const FILTER_CHECKS = {
  0: {
    label: 'پارکینگ',
    value: false,
  },
  1: {
    label: 'انباری',
    value: false,
  },
  2: {
    label: 'آسانسور',
    value: false,
  },
  3: {
    label: 'وام',
    value: false,
  },
  4: {
    label: 'قابل معاوضه',
    value: false,
  },
  5: {
    label: 'تخلیه',
    value: false,
  },
  6: {
    label: 'قابل تبدیل',
    value: false,
  },
  7: {
    label: 'فروش اقساطی',
    value: false,
  },
  8: {
    label: 'مبله',
    value: false,
  },
};
