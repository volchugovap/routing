import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export function Header() {
	return (
		<header className={styles.header}>
			<Link to='/' className={styles.logo}>
				QPICK
			</Link>
			<div className={styles.nav}>
				<Link to='/favorites'>
					<img src='/public/heart.svg' alt='' />
				</Link>
				<Link to='/shop'>
					<img src='/public/basket.svg' alt='' />
				</Link>
			</div>
		</header>
	)
}
