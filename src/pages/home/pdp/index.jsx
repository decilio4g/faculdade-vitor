import { PdpCard } from '../../../components/pdpCard'
import './styles.css'

export function PDP() {
    const listCards = [
        {
            name: 'Spider Man: The game',
            price: '150.00',
            image: '../../assets/635329.jpeg',
        },
        {
            name: 'Spider Man: The game',
            price: '150.00',
            image: '../../assets/635329.jpeg',
        },
        {
            name: 'Spider Man: The game',
            price: '150.00',
            image: '../../assets/635329.jpeg',
        }
    ]
    return (
        <div className='container-list-card'>
            {listCards?.map((card, index) => {
                return (
                    <div className="card-list">
                        <PdpCard />
                    </div>
                )
            })}

        </div>
    )
}