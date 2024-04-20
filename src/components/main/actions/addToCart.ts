import { useState } from 'react'

const [arrId, setArrId] = useState<number[]>([])

const addToCart = (props: number): number[] => {
	setArrId([...arrId, props])
	return arrId
}

export default addToCart
