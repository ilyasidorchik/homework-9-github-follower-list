import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import styles from './followers.module.css';
import { getIsLoading, getData } from '../../modules/Followers';

class Followers extends PureComponent {
  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    const { isLoading, data } = this.props;

    if (isLoading) return <div>Загрузка информации о подписчиках</div>;
    if (!data) return <div>Нет информации о подписчиках</div>;

    return (
      <div className={cx(styles.root, 't-followers')}>
        {data.map(({ id, login, avatar_url }) => (
          <div className={styles.follower} key={id}>
            <img src={avatar_url} alt={login} className={styles.followerImg} />
            <p className={styles.followerLogin}>{login}</p>
          </div>  
        ))}
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  isLoading: getIsLoading(state),
  data: getData(state)
}))(Followers);