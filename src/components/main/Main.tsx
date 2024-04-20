//import { useState } from 'react'
import styles from './Main.module.scss'

import addToCart from './actions/addToCart'
import { headPhones, wirelesses } from './forms.data'

export function Main() {
	//const [arrId, setArrId] = useState<number[]>([])
	/* const arrIds = useMemo(() => {
		addToCart(props)
	}, [props]) */

	return (
		<div className={styles.main}>
			<p>Наушники</p>
			<div className={styles.forms_headphone}>
				{headPhones.map(headPhone => (
					<div key={headPhone.id} className={styles.form}>
						<div className={styles.image}>
							<img src={headPhone.img} alt='' />
						</div>
						<div>
							<div className={styles.form__textTop}>
								<h3>{headPhone.title}</h3>
								<div>{headPhone.price} ₽</div>
							</div>
							<div className={styles.form__textBottom}>
								<div>
									<img src='/public/star-rate.svg' alt='star' />
									<div> {headPhone.rate}</div>
								</div>
								<button onClick={() => addToCart(headPhone.id)}>Купить</button>
							</div>
						</div>
					</div>
				))}
			</div>

			<p>Беспроводные наушники</p>
			<div className={styles.forms_wireless}>
				{wirelesses.map(wireless => (
					<div key={wireless.id} className={styles.form}>
						<div className={styles.image}>
							<img src={wireless.img} alt='' />
						</div>
						<div>
							<div className={styles.form__textTop}>
								<h3>{wireless.title}</h3>
								<div>{wireless.price} ₽</div>
							</div>
							<div className={styles.form__textBottom}>
								<div>
									<img src='/public/star-rate.svg' alt='star' />
									<div>{wireless.rate}</div>
								</div>
								<button onClick={() => console.log('lox')}>Купить</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
