import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://www.the-sun.com/wp-content/uploads/sites/6/2023/10/f0f06926-8775-45de-be93-57d841725bf7.jpg?strip=all&w=922"
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
