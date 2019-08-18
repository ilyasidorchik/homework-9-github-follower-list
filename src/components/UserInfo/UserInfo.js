import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getIsLoading, getData } from '../../modules/User';
import styles from './UserInfo.module.css';

class UserInfo extends PureComponent {
  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    const { isLoading, data } = this.props;
    
    if (isLoading) return <div>Загрузка информации о пользователе</div>;
    if (!data) return <div>Информация о пользователе не найдена</div>;

    const { avatar_url: image, name, bio } = data;
    return (
      <div className={styles.root}>
        <div className={styles.imageWrapper}>
          <img src={image} alt={name} />
        </div>
        <div>
          <p className='t-user-name'>{name}</p>
          <p className='t-user-bio'>{bio}</p>
        </div>
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  isLoading: getIsLoading(state),
  data: getData(state)
}))(UserInfo);