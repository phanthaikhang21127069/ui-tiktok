import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChain, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/ee588252d061c3030157bf9447ef9534~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1712750400&x-signature=YTgm72UT%2FFmzY9HRSQinwRJflys%3D"
        alt="user"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Aaron</span>
          <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>aaronhimhe</span>
      </div>
    </div>
  );
}

export default AccountItem;
