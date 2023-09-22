import { useEffect, useRef, useState } from 'react';

import Photo from '../../assets/174A4933 1.png';
import { Arrow } from '../../assets/Arrow';
import LogoImage from '../../assets/lg.png';
import {LogoIcon} from "../../assets/LogoIcon";
import { PortfolioIcon } from '../../assets/PortfolioIcon';
import { PhoneIcon } from '../../assets/PhoneIcon';
import { MoscowIcon } from '../../assets/MoscowIcon';
import { TelegramIcon } from '../../assets/TelegramIcon';
import { YouTubeIcon } from '../../assets/YouTubeIcon';
import { InstagramIcon } from '../../assets/InstagramIcon';
import { WhatsApp } from '../../assets/WhatsApp';
import styles from './Portfolio.module.css';

export const Portfolio = () => {
  const [isTablet, setTablet] = useState<boolean>(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      const isTab = wrapperRef.current.clientWidth < 1200;

      setTablet(isTab);
    }
  }, []);

  return (
    <div className={styles.block} ref={wrapperRef}>
      <div className={styles.icon_wrappers}>
        {!isTablet && (
          <div>
            <span className={`${styles.bold_span} ${styles.phone_number}`}>
              +7 909 937 17 54
            </span>
          </div>
        )}
        <div className={styles.main_icon}>
          <PortfolioIcon />
          <div className={styles.hide}>
            <MoscowIcon />
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.hide}>
            <PhoneIcon />
          </div>
          <span>меню</span>
        </div>
      </div>

      <div className={styles.leave_request}>
        <button className={styles.btn}>ОСТАВИТЬ ЗАЯВКУ</button>
      </div>

      <div className={styles.content}>
        <div className={styles.content_left}>
          <ul>
            <li className={styles.selected}>СВАДЬБЫ</li>
            <li>КОРПОРАТИВЫ</li>
            <li>МЕРОПРИЯТИЯ</li>
            <li>КОНЦЕРТЫ</li>
          </ul>

          <div className={styles.content_center}>
            <div className={styles.about_section}>
              <span className={styles.bold_span}>свадьбы</span>
              <p>Общее описание свадебных мероприятий тут</p>
            </div>
            <button className={styles.btn_normal}>посмотреть проекты</button>
          </div>
        </div>

        <div className={styles.img_wrapper}>
          <img alt='' src={Photo} />
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.links}>
          <a href=''>telegram</a>
          <a href=''>instagram</a>
          <a href=''>youtube</a>
        </div>
        <div>
          <button className={styles.next_btn}>дальше</button>
          <Arrow />
        </div>
      </div>

      <div className={`${styles.hide} ${styles.icons_wrapper}`}>
        <div className={styles.icons}>
          <TelegramIcon />
          <YouTubeIcon />
        </div>

        <div className={styles.icons}>
          <InstagramIcon />
          <WhatsApp />
        </div>
      </div>

      <div className={`${styles.hide} ${styles.next_section}`}>
        <button className={styles.next_btn}>далее</button>
      </div>

      <div className={styles.logo_wrapper}>
        <div className={styles.logo_section}>
          <LogoIcon />
          <img src={LogoImage} alt='' />
        </div>
        <div className={styles.hide}>
          <span className={styles.logo_span}>
            политика <br /> конфиденциальности
          </span>
        </div>
      </div>
    </div>
  );
};
