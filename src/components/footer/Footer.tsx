import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

export function Footer() {
	return (
		<div className={styles.footer}>
			<Link to='/'>QPICK</Link>
			<div className={styles.nav_list_left}>
				<Link to='/favorites'>Избранное</Link>
				<Link to='/shop'>Корзина</Link>
				<Link to='#'>Контакты</Link>
			</div>

			<div className={styles.nav_list_right}>
				<a href='#'>Условия сервиса</a>
				<div>
					<img src='/public/RU.svg' alt='' />
					<p>Рус</p>
					<p>Eng</p>
				</div>
			</div>

			<nav className={styles.nav}>
				<Link to='https://vk.com/happen_gaggen'>
					<img src='/public/VK.svg' alt='' />
				</Link>
				<Link to='https://t.me/ne_nado_dyadya'>
					<img src='/public/Telegram.svg' alt='' />
				</Link>
				<Link to='https://web.whatsapp.com'>
					<img src='/public/Whatsapp.svg' alt='' />
				</Link>
			</nav>
		</div>
	)
}
