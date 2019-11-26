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

const CHECK_0 = {
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
};

const CHECK_1 = {
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
    label: 'تخلیه',
    value: false,
  },
  4: {
    label: 'قابل تبدیل',
    value: false,
  },
  5: {
    label: 'مبله',
    value: false,
  },
};

const CHECK_2 = {
  0: {
    label: 'پارکینگ',
    value: false,
  },
  1: {
    label: 'آسانسور',
    value: false,
  },
  2: {
    label: 'تخلیه',
    value: false,
  },
  3: {
    label: 'مبله',
    value: false,
  },
};

const CHECK_3 = {
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
    label: 'فروش اقساطی',
    value: false,
  },
};

const CHECK_4 = {
  0: {
    label: 'پارکینگ',
    value: false,
  },
  1: {
    label: 'وام',
    value: false,
  },
  2: {
    label: 'تخلیه',
    value: false,
  },
};

export const FILTER_CHECKS = [
  {
    ids: [0, 1, 2, 3, 4, 5],
    checks: CHECK_0,
  },
  {
    ids: [0, 1, 2, 3, 4, 5],
    checks: CHECK_1,
  },
  {
    ids: [0, 1, 2, 3],
    checks: CHECK_2,
  },
  {
    ids: [0, 1, 2, 3, 4],
    checks: CHECK_3,
  },
  {
    ids: [0, 1, 2],
    checks: CHECK_4,
  },
];
