import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './MainPage.module.css';
import { Order } from '../OrderModal';

import { MainIcon } from '../../assets/MainIcon';
import { CloseIcon } from '../../assets/CloseIcon';
import { LogoText } from '../../assets/LogoText';
import { useOutsideClick } from '../../utils/useOutsideClick';

export const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeIcon = () => {
    setIsOpen(false);
  };

  const handleClickOutside = () => {
    closeIcon();
  };

  const myRef = useOutsideClick(handleClickOutside);

  return (
    <div className={styles.block}>
      <div className={styles.icon_wrappers}>
        <div className={styles.main_icon}>
          <MainIcon />
          <div className={styles.hide}>
            <LogoText />
          </div>
        </div>
        <div className={styles.close_icon}>
          <CloseIcon />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.list}>
          <NavLink to={''}>Главная</NavLink>
          <NavLink to={''}>О нас</NavLink>
          <NavLink to={'portfolio'}>портфолио</NavLink>
          <NavLink to={'portfolio'}>проекты</NavLink>
          <NavLink to={'portfolio'}>мероприятия</NavLink>
          <NavLink to={''}>контакты</NavLink>
          <NavLink to={''}>новости</NavLink>
        </div>
        <div className={styles.content_right}>
          <div className={styles.span_block}>
            <span>+7 909 937 17 54</span>
            <span>mosgos@gospel.ru</span>
          </div>
          <div className={styles.btns}>
            <button className={styles.btn} onClick={openModal}>
              заказать мероприятие
            </button>
            <button className={styles.hide}>купить билет</button>
          </div>
        </div>
      </div>
      <div className={styles.main_text}>MOSCOW GOSPEL TEAM</div>
      <div className={styles.link_section}>
        <a className={styles.link} href=''>
          telegram
        </a>
        <a className={styles.link} href=''>
          instagram
        </a>
        <a className={styles.link} href=''>
          youtube
        </a>
      </div>
      <div ref={myRef}>{isOpen && <Order onClick={closeIcon} />}</div>
    </div>
  );
};
